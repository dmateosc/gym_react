import { useEffect, useState } from "react";
import { fetchConToken } from "../helpers/fetch";

export const useImage = (type) => {




    
  const [image, setImage] = useState({});
  const getImage = async (name) => {
    const resp = await fetchConToken(`image\\${name}\\${type}`);

    if (resp.status == 200) {
      const blob = await resp.blob();
      console.log(URL.createObjectURL(blob));
      setImage(URL.createObjectURL(blob));
    } else {
      setImage("");
    }
  };
  

  return {
    image,
    getImage,
  };
};
