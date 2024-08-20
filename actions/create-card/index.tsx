"use server";

import { InputType, ReturnType } from "./types";
import { client } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateCardSchema } from "./schema";


const handler = async (data: InputType): Promise<ReturnType> => {


  const { title, listId } = data;

  let card;
  try {
    const list = await client.list.findUnique({
      where: {
        id: listId,

      },
      include: {
        cards: {
          orderBy: {
            order: "desc",
          },
        },
      },
    });
    if (!list) {
      return {
        error: "List not found.",
      };
    }
    const newOrder = list.cards[0]?.order ? list.cards[0]?.order + 1 : 1;

    card = await client.card.create({
      data: {
        title,
        listId,
        order: newOrder,
      },

    });

  } catch (error) {
    return {
      error: "Failed to create card.",
    };
  }
  revalidatePath(`/`);
  return {
    data: card,
  };
};

export const createCard = createSafeAction(CreateCardSchema, handler);