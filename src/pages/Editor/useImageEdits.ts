import { useSearchParams } from "react-router-dom";

export function useImageEdits() {
  const [searchParams, setSearchParams] = useSearchParams();

  const width = Number(searchParams.get("width"));
  const height = Number(searchParams.get("height"));
  const blur = Number(searchParams.get("blur")) || 0;
  const grayscale = Number(searchParams.get("grayscale")) || 0;

  const updateSearchParam = (key: string, value: string) => {
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set(key, value);
    setSearchParams(updatedSearchParams.toString());
  };

  const onChangeBlur = (value: number) => {
    updateSearchParam("blur", value.toString());
  };

  const onChangeGrayscale = (value: number) => {
    updateSearchParam("grayscale", value.toString());
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
