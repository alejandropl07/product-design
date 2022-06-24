import React from "react";
import { Typography, IconButton, Button, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import accounting from "accounting";
import { grey } from "@mui/material/colors";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ReplayIcon from "@mui/icons-material/Replay";

const ProductDetails = ({ product }) => {
  const greyColor = grey[200];

  //   const { id, name, productType, price, rating, image } = product;
  return (
    <Box>
      <Typography
        variant="h4"
        color="textSecondary"
        sx={{ marginBottom: "2rem" }}
      >
        Vans shoes
      </Typography>
      <img
        src="https://i.pinimg.com/originals/63/81/8e/63818e317804c0695b615eb533b67195.jpg"
        alt="productType"
        height="400"
        width="500"
        style={{ float: "left" }}
      />

      {/* <Box
        sx={{
          flexDirection: "row",
          float: "right",
        }}
      >
        {Array(4)
          .fill()
          .map((_, i) => (
            <p key={i}>&#11088;</p>
          ))}
      </Box> */}
      <Box
        sx={{
          display: "block",
          height: 400,
          marginLeft: "auto",
          marginRight: "5rem",
          width: 450,
        }}
      >
        <Typography
          variant="h6"
          color="textPrimary"
          sx={{ marginBottom: "0.5rem" }}
        >
          Enciclopedia Británica para niños
        </Typography>

        <Typography
          variant="h6"
          color="textSecondary"
          sx={{ marginBottom: "0.5rem" }}
        >
          Un interesante tomo sobre el Espacio para los más pequeños presentado
          por fuente más famosa del saber. Encuadernación en tapa dura y 60
          páginas. Editado por Montena. 38,1 x 28,7 cm
        </Typography>

        <Typography variant="h5" color="textSecondary">
          {accounting.formatMoney(1000, "€")}
        </Typography>

        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <Button variant="contained" color="success">
          Personalizalo
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: greyColor,
          display: "block",
          float: "right",
          height: 400,
          marginLeft: "auto",
          marginRight: "5rem",
          width: 450,
        }}
      >
        <Typography variant="h6" color="textSecondary">
          <NotificationsIcon /> Quedan sólo 9 unidades
        </Typography>

        <Typography variant="h6" color="textSecondary">
          <EventAvailableIcon /> Recíbelo el 28 de junio · Si compras hoy ·
          Eligiendo envío urgente a domicio · En península salvo festivo en
          destino · Puedes elegir otra fecha y horario de entrega
        </Typography>

        <Typography variant="h6" color="textSecondary">
          <CardGiftcardIcon /> ENVOLTORIO Elige tu papel de regalo al final del
          carro y lo envolveremos por ti.
        </Typography>

        <Typography variant="h6" color="textSecondary">
          <ReplayIcon /> Devolucione durante 30 dias
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;
