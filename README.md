```diagram-sequence
Title: Payment Provider Settlement Flow
Payment Providers -> Settlement Adapters: settlement file
Note over Settlement Adapters: Ops Pipeline \n PPROSettlementFileExplorer
Settlement Adapters -> Settlement API: /transfers
Settlement Adapters -> Settlement API: /transfers/:id/close
Settlement API -> ReconcilerRunner: EBATs

```
