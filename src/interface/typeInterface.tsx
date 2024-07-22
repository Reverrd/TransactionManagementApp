export interface Transaction {
    id: number;
    reference: string;
    _value: number;
    created_at: string;
    updated_at: string;
    status: string;
    action: string;
    direction: string;
   
  }
  
  export interface ErrorAlertBtnProps {
    closeError: () => void; // add a type annotation for closeError
  }