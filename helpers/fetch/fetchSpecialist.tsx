import { getSpecialistList } from "@/helpers/generator/getSpecialistList";
import { randomListItem } from "@/helpers/_silabs/randomListItem";
import { Specialist } from "@/types/Generator";

export function fetchSpecialist(game: string = ""): Specialist {
  const dataList = getSpecialistList(game);
  return randomListItem(dataList);
}
