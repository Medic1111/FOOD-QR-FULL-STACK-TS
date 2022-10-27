type UiState = {
  hero: boolean;
  modal: boolean;
  code: boolean;
  preview: boolean;
};

export type UiAction =
  | { type: "HERO" }
  | { type: "MODAL" }
  | { type: "CODE" }
  | { type: "PREVIEW" };

export const UiInitialState = {
  hero: true,
  modal: false,
  code: false,
  preview: false,
};

const uiReducer = (state: UiState, action: UiAction) => {
  switch (action.type) {
    case "HERO": {
      return {
        ...UiInitialState,
      };
    }
    case "MODAL": {
      return {
        ...UiInitialState,
        modal: true,
        hero: false,
      };
    }
    case "CODE": {
      return {
        ...UiInitialState,
        hero: false,
        code: true,
      };
    }
    case "PREVIEW": {
      return {
        ...UiInitialState,
        hero: false,
        preview: true,
      };
    }
    default:
      return UiInitialState;
  }
};

export default uiReducer;
