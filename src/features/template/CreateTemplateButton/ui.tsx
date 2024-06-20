"use client";

import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { FC, useCallback, useState } from "react";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSchema } from "./lib";
import { z } from "zod";
import { useFormState } from "react-dom";
import { createTemplate } from "./api";
import { Style } from "util";

export const CreateTemplateButton: FC = () => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const handleModal = useCallback(() => setIsOpenedModal((prev) => !prev), []);

  const form = useForm<z.infer<typeof createSchema>>({
    resolver: zodResolver(createSchema),
  });

  const [state, formAction] = useFormState(createTemplate, null);

  const onSubmit: SubmitHandler<z.infer<typeof createSchema>> = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formAction(formData);
  };

  return (
    <>
      <Box display="flex" flexDirection="column" onClick={handleModal}>
        <Box
          bgcolor="#D9D9D9"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={285}
          height={175}
          sx={{
            cursor: "pointer",
          }}
        >
          <ControlPointOutlinedIcon
            color="primary"
            sx={{ width: 100, height: 100 }}
          />
        </Box>
        <Typography>Создать новый шаблон</Typography>
      </Box>

      <Modal open={isOpenedModal} onClose={handleModal}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 400,
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
          >
            <Controller
              control={form.control}
              name="name"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  helperText={error ? error.message : null}
                  error={!!error}
                  fullWidth
                  variant="outlined"
                  label="Название"
                />
              )}
            />

            <Button type="submit">Создать</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
