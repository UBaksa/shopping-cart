import * as React from "react";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";
import DeleteForever from "@mui/icons-material/DeleteForever";

export default function DeleteButton({ onDelete }) {
  const handleDelete = () => {
    onDelete();
  };
  return (
    <Box
      style={{ color: "yellow" }}
      sx={{ display: "flex", gap: 1, alignItems: "center" }}
    >
      <Chip
        variant="outlined"
        onClick={handleDelete}
        endDecorator={
          <ChipDelete variant="plain">{/* <DeleteForever /> */}</ChipDelete>
        }
      >
        Remove
      </Chip>
    </Box>
  );
}
