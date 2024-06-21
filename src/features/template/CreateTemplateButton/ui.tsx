"use client";

import { Box, Button, Modal, Typography, TextField } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSchema } from "./lib";
import { z } from "zod";
import { useFormState } from "react-dom";
import { createTemplate } from "./api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const CreateTemplateButton: FC = () => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const handleModal = useCallback(() => setIsOpenedModal((prev) => !prev), []);
  const router = useRouter();

  const form = useForm<z.infer<typeof createSchema>>({
    resolver: zodResolver(createSchema),
  });

  const [state, formAction] = useFormState(createTemplate, null);

  const onSubmit: SubmitHandler<z.infer<typeof createSchema>> = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formAction(formData);
  };

  useEffect(() => {
    if (state?.data?.message) {
      toast.success(state?.data?.message);
      router.refresh();
    } else if (state?.error?.message) {
      toast.error(state?.error?.message);
    }
    handleModal();
  }, [state]);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap="6px"
        onClick={handleModal}
      >
        <Box
          bgcolor="#D9D9D9"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={280}
          height={175}
          sx={{
            cursor: "pointer",
          }}
        >
          <ControlPointOutlinedIcon
            color="primary"
            sx={{ width: 100, height: 100, color: "white" }}
          />
        </Box>
        <Typography fontWeight="bold" mt="6px">
          Создать новый шаблон
        </Typography>
      </Box>

      <Modal open={isOpenedModal} onClose={handleModal}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box
            component="form"
            onSubmit={form.handleSubmit(onSubmit)}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="10px"
          >
            <Typography component="p" fontWeight="bold">
              Создать шаблон
            </Typography>
            <Controller
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  helperText={
                    fieldState.error ? fieldState.error.message : null
                  }
                  error={!!fieldState.error}
                  fullWidth
                  variant="filled"
                  type="text"
                  required
                  label="Название шаблона"
                />
              )}
            />

            <Button type="submit" variant="contained">
              Создать
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
