```diagram-sequence
Title: Payment Provider Settlement Flow
Payment Providers -> Settlement Adapters: settlement file
Note over Settlement Adapters: Ops Pipeline \n PPROSettlementFileExplorer
Settlement Adapters -> Settlement API: /transfers
Settlement Adapters -> Settlement API: /transfers/:id/close
Settlement API -> ReconcilerRunner: EBATs
```
```diagram-sequence
Payment Providers -> Bank Transfer: $
Bank Transfer -> Parser Runner: BAT
Parser Runner -> ReconilerRunner: PBAT
Note over ReconcilerRunner: PBATs reconciled with EBATs
Note right of ReconcilerRunner: -> ReconciliationGroup
```
