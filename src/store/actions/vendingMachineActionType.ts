export enum VendingMachineActionType {
  addCodeCharacterToCommandPanel = 'VENDING-MACHINE--ADD-CODE-CHARACTER-TO-COMMAND-PANEL',
  clearCommandPanel = 'VENDING-MACHINE--CLEAR-COMMAND-PANEL'
}

interface AddCodeCharacterToCommandPanel {
  type: typeof VendingMachineActionType.addCodeCharacterToCommandPanel;
  payload: string;
}

interface ClearCommandPanel {
  type: typeof VendingMachineActionType.clearCommandPanel;
}

export const addCodeCharacterToCommandPanel = (
  value: string
): AddCodeCharacterToCommandPanel => ({
  type: VendingMachineActionType.addCodeCharacterToCommandPanel,
  payload: value
});

export const clearCommandPanel = (): ClearCommandPanel => ({
  type: VendingMachineActionType.clearCommandPanel
});

export type VendingMachineAction =
  | AddCodeCharacterToCommandPanel
  | ClearCommandPanel;
