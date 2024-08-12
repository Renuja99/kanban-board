import { Card, List } from "@prisma/client";

export type FieldErrors<T> = {
    [K in keyof T]?: string[];
  };

export type ActionState<TInput, TOutput> = {
    fieldErrors?: FieldErrors<TInput>;
    error?: string | null;
    data?: TOutput;
  };

export type ListWithCards = List & { cards: Card[]}

export type CardWithList  = Card & { list : List }

