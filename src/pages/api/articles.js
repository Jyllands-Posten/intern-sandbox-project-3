// Import your articles data
import articlesData from "/src/pages/api/json/article_content.json";

export default function handler(req, res) {
  const { id } = req.query;

  if (id) {
    const article = articlesData.articles.find((article) => article.id === id);

    if (article) {
      res.status(200).json(article);
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  } else {
    res.status(200).json(articlesData);
  }
}
