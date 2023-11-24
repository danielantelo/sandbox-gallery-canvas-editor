import { useSearchParams } from "react-router-dom";

export function useImageEdits() {
  const [searchParams, setSearchParams] = useSearchParams();

  const width = Number(searchParams.get("width"));
  const height = Number(searchParams.get("height"));
  const blur = Number(searchParams.get("blur")) || 0;
  const grayscale = Number(searchParams.get("grayscale")) || 0;

  const onChangeBlur = (value: number) => {
    setSearchParams((searchParams) => {
      searchParams.set("blur", value.toString());
      return searchParams;
    });
  };

  const onChangeGrayscale = (value: number) => {
    setSearchParams((searchParams) => {
      searchParams.set("grayscale", value.toString());
      return searchParams;
    });
  };

  const onChangeDimensions = (width: number, height: number) => {
    setSearchParams((searchParams) => {
      searchParams.set("width", width.toString());
      searchParams.set("height", height.toString());
      return searchParams;
    });
  };

  return {
    height,
    width,
    blur,
    grayscale,
    onChangeDimensions,
    onChangeBlur,
    onChangeGrayscale,
  };
}
