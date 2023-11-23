import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export function useImageFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [blur, setBlur] = useState<number>(
    Number(searchParams.get("blur")) ?? 0
  );
  const [grayscale, setGrayscale] = useState<number>(
    Number(searchParams.get("grayscale")) ?? 0
  );

  const updateSearchParams = (key: string, value: string) => {
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set(key, value);
    setSearchParams(updatedSearchParams.toString());
  };

  const onChangeBlur = (value: number) => {
    setBlur(value);
    updateSearchParams('blur', value.toString());
  };

  const onChangeGrayscale = (value: number) => {
    setGrayscale(value);
    updateSearchParams('grayscale', value.toString());
  };

  return {
    blur,
    grayscale,
    onChangeBlur,
    onChangeGrayscale,
  };
}
