type FormState = {
  general: boolean;
  category: boolean;
  api: boolean;
};

export type FormAction =
  | { type: "GENERAL" }
  | { type: "CATEGORY" }
  | { type: "API" };

export const FormInitialState = {
  general: true,
  category: false,
  dish: false,
  api: false,
};

const FormReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case "GENERAL": {
      return {
        ...FormInitialState,
      };
    }
    case "CATEGORY": {
      return {
        ...FormInitialState,
        general: false,
        category: true,
      };
    }

    case "API": {
      return {
        ...FormInitialState,
        general: false,
        api: true,
      };
    }

    default:
      return FormInitialState;
  }
};

export default FormReducer;
