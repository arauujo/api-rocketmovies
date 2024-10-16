const { response } = require("express");
const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MovieNotesController {
	async create(request, response) {
		const { title, description, rating, movie_tags } = request.body;
		const user_id = request.user.id;

		if (!rating) {
			throw new AppError("É necessário preencher a nota do filme");
		}

		if (rating < 0 || rating > 5) {
			throw new AppError("Nota deve estar entre 0 a 5");
		}

		const [note_id] = await knex("movie_notes").insert({
			title,
			description,
			rating,
			user_id,
		});

		if (movie_tags.length > 0) {
			const movieTagsInsert = movie_tags.map((name) => {
				return {
					note_id,
					user_id,
					name,
				};
			});

			await knex("movie_tags").insert(movieTagsInsert);
		}

		response.json();
	}

	async show(request, response) {
		const { id } = request.params;

		const movieNote = await knex("movie_notes").where({ id }).first();
		const movieTags = await knex("movie_tags")
			.where({ note_id: id })
			.orderBy("name");

		const { user_id } = movieNote;
		const userData = await knex("users")
			.select("name", "avatar")
			.where({ id: user_id })
			.first();

		return response.json({
			...movieNote,
			movieTags,
			userData,
		});
	}

	async delete(request, response) {
		const { id } = request.params;

		await knex("movie_notes").where({ id }).delete();

		return response.json();
	}

	async index(request, response) {
		const { title } = request.query;
		const user_id = request.user.id;

		const movieNotes = await knex("movie_notes")
			.where({ user_id })
			.whereLike("title", `%${title}%`)
			.orderBy("title");

		const allMovieTags = await knex("movie_tags");

		const movieNotesWithTags = movieNotes.map((note) => {
			const movieNoteTags = allMovieTags.filter(
				(tag) => tag.note_id === note.id,
			);

			return {
				...note,
				tags: movieNoteTags,
			};
		});
		
		return response.json(movieNotesWithTags);
	}
}

module.exports = MovieNotesController;
