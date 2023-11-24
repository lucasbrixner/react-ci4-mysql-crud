import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { getStudentPortrait } from "../../api";
import { GridRowId } from "@mui/x-data-grid";

export default function TinyPortrait({ id }: { id: GridRowId }) {
  const [src, setSrc] = useState<string>("/broken-image.jpg");

  useEffect(() => {
    let isMounted = true;
    const fetchImage = async () => {
      try {
        const blobData = await getStudentPortrait(id);
        const imageUrl = URL.createObjectURL(blobData);
        if (isMounted) {
          setSrc(imageUrl);
        }
      } catch (error) {
        if (isMounted) {
          setSrc("/broken-image.jpg");
        }
        console.error("Error fetching image:", error);
      }
    };
    fetchImage();
    return () => {
      isMounted = false;
      if (src !== "/broken-image.jpg") {
        URL.revokeObjectURL(src);
      }
    };
  }, [id, src]);
  
  return <Avatar src={src} />
}