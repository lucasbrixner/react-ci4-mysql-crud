import { FormEvent, Fragment, useEffect, useState } from "react";
import { Avatar, Badge } from "@mui/material";
import { GridRowId } from "@mui/x-data-grid";
import {
  getStudentPortrait,
  uploadStudentPortrait,
  deleteStudentPortrait
} from "../../api";
import {
  UploadIconButton,
  SaveIconButton,
  CancelIconButton,
  DeleteIconButton
} from "./actions";

export default function LargePortrait({ id }: { id: GridRowId }) {
  const [src, setSrc] = useState<string>("/broken-image.jpg");
  const [file, setFile] = useState<File|null>(null);

  const handleFileChange = (event: FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    }
    setFile(target.files?.[0] || null);
    const fileReader = new FileReader;
    fileReader.onload = function() {
      setSrc(fileReader.result as string);
    }
    fileReader.readAsDataURL(target.files[0]);
  };

  const handleUploadClick = async () => {
    if (!file) {
      return;
    }
    try {
      const upload = await uploadStudentPortrait(id, file);
      if (upload.status === 200 || upload.status === 201) {
        const blobData = await getStudentPortrait(id);
        const imageUrl = URL.createObjectURL(blobData);
        setSrc(imageUrl);
        setFile(null);
      }
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };

  const handleCancelClick = () => {
    setFile(null);
    setSrc("/broken-image.jpg");
  };

  const handleDeleteClick = async () => {
    try {
      await deleteStudentPortrait(id);
      setSrc("/broken-image.jpg");
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

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

  const renderBadgeContent = () => {
    if (file) {
      return (
        <Fragment>
          <SaveIconButton onClick={handleUploadClick} />
          <CancelIconButton onClick={handleCancelClick} />
        </Fragment>
      );
    } else if (src === "/broken-image.jpg") {
      return <UploadIconButton onChange={handleFileChange} />;
    } else {
      return <DeleteIconButton onClick={handleDeleteClick} />;
    }
  };
  
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={renderBadgeContent()}
    >
      <Avatar
        src={src}
        variant="rounded"
        sx={{ width: 150, height: 150 }}
      />
    </Badge>
  );
}