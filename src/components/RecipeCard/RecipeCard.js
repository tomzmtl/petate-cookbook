import { Card, CardHeader, CardMedia } from "@mui/material"
import "./styles.scss"

const RecipeCard = ({ recipe }) => {
  const cardHeaderProps = {
    className: "RecipeCard__header",
    title: recipe.name,
  }

  return (
    <Card className="RecipeCard">
      <CardHeader {...cardHeaderProps} />
      <CardMedia
        component="img"
        height="200"
        image="https://via.placeholder.com/400x300"
        alt={recipe.name}
      />
    </Card>
  )
}

export default RecipeCard
