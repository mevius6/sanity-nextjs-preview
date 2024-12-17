"use client";

import { defineConfig } from "sanity";

// Go → https://www.sanity.io/docs/structure-builder-cheat-sheet
import { structureTool } from "sanity/structure";
// Go → https://www.sanity.io/docs/configuring-the-presentation-tool
import { presentationTool } from "sanity/presentation";

import { visionTool } from "@sanity/vision";
import { ruKZLocale } from "@sanity/locale-ru-kz";
import { AsteriskIcon } from "@sanity/icons";

import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schema } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";
import { resolve } from "@/sanity/presentation/resolve";

const icon = AsteriskIcon;

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  title: "Галерея живописи",
  subtitle: "Собрание произведений Владимира и Натальи Игаевых",
  // subtitle: "Коллекция живописи Владимира и Натальи Игаевых",
  icon,
  // https://www.sanity.io/docs/schema-types
  schema,
  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: "/api/draft-mode/enable",
        },
      },
      resolve,
    }),
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    ruKZLocale({
      title: "Русский (Казахстан)",
    }),
  ],
  scheduledPublishing: {
    enabled: false,
    // inputDateTimeFormat: 'MM/dd/yyyy h:mm a',
  }
});
