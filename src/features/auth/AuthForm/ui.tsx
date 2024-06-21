"use client";

import { useEffect } from "react";
import { login } from "./api";
import { loginSchema } from "./lib";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState } from "react-dom";
import { z } from "zod";
import toast from "react-hot-toast";
import { Box, Button, TextField, Typography, Card } from "@mui/material";

export const AuthForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const [state, formAction] = useFormState(login, null);

  const onSubmit: SubmitHandler<z.infer<typeof loginSchema>> = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formAction(formData);
  };

  useEffect(() => {
    if (state?.data?.message) {
      toast.success(state?.data?.message);
      router.push("/");
    } else if (state?.error?.message) {
      toast.error(state?.error?.message);
    }
  }, [state]);

  return (
    <Card
      component="form"
      onSubmit={form.handleSubmit(onSubmit)}
      sx={{
        height: "367px",
        width: "558px",
        padding: "60px",
        display: "flex",
        justifyContent: "center",
        gap: "60px",
        flexDirection: "column",
      }}
    >
      <Typography
        component="p"
        fontWeight="bold"
        align="center"
        textTransform="uppercase"
      >
        Создавайте шаблоны просто
      </Typography>
      <Controller
        control={form.control}
        name="name"
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            helperText={fieldState.error ? fieldState.error.message : null}
            error={!!fieldState.error}
            fullWidth
            variant="standard"
            type="text"
            required
            label="Введите свое имя"
          />
        )}
      />

      <Button type="submit" variant="contained" fullWidth>
        Начать
      </Button>
    </Card>
  );
};
