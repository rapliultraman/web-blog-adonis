import Article from '#models/article'
import type { HttpContext } from '@adonisjs/core/http'

export default class ArticlesController {
  /**
   * Display a list of resource
   */
  public async index({}: HttpContext) {
    return Article.all()
  }

  /**
   * Display form to create a new record
   */
  public async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  public async store({ request }: HttpContext) {
    const data = request.only(['title', 'content'])
    const article = await Article.create(data)
    return article
  }

  /**
   * Show individual record
   */
  public async show({ params }: HttpContext) {
    return Article.findOrFail(params.id)
  }

  /**
   * Edit individual record
   */
  public async edit({ params }: HttpContext) {
    const article = await Article.findOrFail(params.id)
    return article
  }

  /**
   * Handle form submission for the edit action
   */
  public async update({ params, request }: HttpContext) {
    const article = await Article.findOrFail(params.id)
    article.merge(request.only(['title', 'content']))
    await article.save()
    return article
  }

  /**
   * Delete record
   */
  public async destroy({ params }: HttpContext) {
    const article = await Article.findOrFail(params.id)
    await article.delete()
    return { message: 'Di Hapus Coyy' }
  }
}