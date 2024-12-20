import { NoteCategoryEnums } from "./types";

const updateStatus = (status: NoteCategoryEnums): NoteCategoryEnums => {
    switch (status) {
        case NoteCategoryEnums.DONE:
            return NoteCategoryEnums.TODO
        case NoteCategoryEnums.IN_PROGRESS:
            return NoteCategoryEnums.DONE
        case NoteCategoryEnums.TODO:
            return NoteCategoryEnums.IN_PROGRESS;
        default:
            return NoteCategoryEnums.TODO
    }
}


export { updateStatus }