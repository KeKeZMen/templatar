"use client";

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Template } from "@prisma/client";
import { ChangeEvent, FC, FocusEvent, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { editSchema } from "./lib";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { editTemplate } from "./api";
import toast from "react-hot-toast";

type PropsType = {
  template: Template;
};

export const EditTemplateMenu: FC<PropsType> = ({ template }) => {
  const [state, formAction] = useFormState(editTemplate, null);
  const router = useRouter();

  const [headerLinks, setHeaderLinks] = useState<string[]>(
    template.headerLinks.split(",")
  );
  const [footerText, setFooterText] = useState<string[]>(
    template.footerText.split(",")
  );
  const form = useForm<z.infer<typeof editSchema>>({
    defaultValues: {
      ...template,
      headerLinks: headerLinks.join(","),
      footerText: footerText.join(","),
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof editSchema>> = (data) => {
    const formData = new FormData();
    formData.append("id", template.id);
    formData.append("name", data.name);
    formData.append("headerId", `${data.headerId}`);
    formData.append("headerLinks", JSON.stringify(headerLinks));
    formData.append("headerBgColor", data.headerBgColor);
    formData.append("headerTextColor", data.headerTextColor);
    formData.append("mainText", data.mainText);
    formData.append("mainBgColor", data.mainBgColor);
    formData.append("mainTextColor", data.mainTextColor);
    formData.append("footerId", `${data.footerId}`);
    formData.append("footerText", JSON.stringify(footerText));
    formData.append("footerBgColor", data.footerBgColor);
    formData.append("footerTextColor", data.footerTextColor);
    formAction(formData);
  };

  useEffect(() => {
    if (state?.data?.message) {
      toast.success(state?.data?.message);
      router.refresh();
    } else if (state?.error?.message) {
      toast.error(state?.error?.message);
    }
  }, [state]);

  const handleSetHeaderLinks = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    setHeaderLinks((prev) => [...prev.toSpliced(index, 1, e.target.value)]);
  };
  const handleAddHeaderLink = () => {
    setHeaderLinks((prev) => [...prev, ""]);
  };
  const handleRemoveHeaderLinkOnBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
    index: number
  ) => {
    if (e.target.value === "") {
      setHeaderLinks((prev) => prev.toSpliced(index, 1));
    }
  };

  const handleSetFooterText = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    setFooterText((prev) => [...prev.toSpliced(index, 1, e.target.value)]);
  };
  const handleAddFooterText = () => {
    setFooterText((prev) => [...prev, ""]);
  };
  const handleRemoveFooterTextOnBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
    index: number
  ) => {
    if (e.target.value === "") {
      setFooterText((prev) => prev.toSpliced(index, 1));
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `http://localhost:3000/preview/${template.id}`
    );
    toast.success("Ссылка скопирована в буфер обмена");
  };

  return (
    <Box
      display="flex"
      gap="15px"
      flexDirection="column"
      alignItems="center"
      component="form"
      onSubmit={form.handleSubmit(onSubmit)}
      padding="14px"
      width="20%"
    >
      <Box
        display="flex"
        gap="15px"
        flexDirection="column"
        alignItems="flex-start"
        overflow="auto"
        width="100%"
        sx={{
          height: "calc(100dvh - 200px)",
        }}
      >
        <Controller
          rules={{ required: true }}
          control={form.control}
          name="name"
          render={({ field }) => (
            <TextField
              {...field}
              variant="standard"
              label="Название шаблона"
              fullWidth
            />
          )}
        />

        <FormControl>
          <FormLabel>Выберите вариант шапки</FormLabel>
          <Controller
            name="headerId"
            rules={{ required: true }}
            control={form.control}
            render={({ field }) => (
              <RadioGroup {...field}>
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label="Классический вид"
                />
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Компактный вид"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Современный вид"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="Минималистичный вид"
                />
              </RadioGroup>
            )}
          />
        </FormControl>

        <FormControl fullWidth>
          <FormLabel>Добавьте разделы шапки</FormLabel>
          <Box display="flex" flexDirection="column" gap="10px">
            {headerLinks.map((headerLink, i) => (
              <TextField
                variant="standard"
                key={i}
                value={headerLink}
                onChange={(e) => handleSetHeaderLinks(e, i)}
                onBlur={(e) => handleRemoveHeaderLinkOnBlur(e, i)}
                fullWidth
              />
            ))}
            <Button variant="text" type="button" onClick={handleAddHeaderLink}>
              Добавить
            </Button>
          </Box>
        </FormControl>

        <Controller
          rules={{ required: true }}
          control={form.control}
          name="headerBgColor"
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              label="Цвет заднего фона шапки"
              fullWidth
              type="color"
            />
          )}
        />

        <Controller
          rules={{ required: true }}
          control={form.control}
          name="headerTextColor"
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              label="Выберете цвет текста шапки"
              fullWidth
              type="color"
            />
          )}
        />

        <Controller
          rules={{ required: true }}
          control={form.control}
          name="mainText"
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              label="Введите текст главной части"
              fullWidth
              type="text"
            />
          )}
        />

        <Controller
          rules={{ required: true }}
          control={form.control}
          name="mainBgColor"
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              label="Цвет заднего фона главной части"
              fullWidth
              type="color"
            />
          )}
        />

        <Controller
          rules={{ required: true }}
          control={form.control}
          name="mainTextColor"
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              label="Выберете цвет текста основной части"
              fullWidth
              type="color"
            />
          )}
        />

        <FormControl>
          <FormLabel>Выберите вариант подвала</FormLabel>
          <Controller
            name="footerId"
            rules={{ required: true }}
            control={form.control}
            render={({ field }) => (
              <RadioGroup {...field}>
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label="Классический вид"
                />
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Компактный вид"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Современный вид"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="Минималистичный вид"
                />
              </RadioGroup>
            )}
          />
        </FormControl>

        <FormControl fullWidth>
          <FormLabel>Добавьте разделы подвала</FormLabel>
          <Box display="flex" flexDirection="column" gap="10px">
            {footerText.map((headerLink, i) => (
              <TextField
                variant="standard"
                key={i}
                value={headerLink}
                onChange={(e) => handleSetFooterText(e, i)}
                onBlur={(e) => handleRemoveFooterTextOnBlur(e, i)}
                fullWidth
              />
            ))}
            <Button variant="text" type="button" onClick={handleAddFooterText}>
              Добавить
            </Button>
          </Box>
        </FormControl>

        <Controller
          rules={{ required: true }}
          control={form.control}
          name="footerBgColor"
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              label="Цвет заднего фона подвала"
              fullWidth
              type="color"
            />
          )}
        />

        <Controller
          rules={{ required: true }}
          control={form.control}
          name="footerTextColor"
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              label="Выберете цвет текста подвала"
              fullWidth
              type="color"
            />
          )}
        />
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="10px"
      >
        <Button type="button" variant="text" onClick={handleCopy}>
          Скопировать ссылку
        </Button>

        <Button
          type="submit"
          variant="contained"
          sx={{ alignSelf: "flex-end" }}
        >
          Сохранить
        </Button>
      </Box>
    </Box>
  );
};
