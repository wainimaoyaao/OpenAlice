// Contract extension (aliceId on IBKR Contract)
import './contract-ext.js'

// UTA
export { UnifiedTradingAccount } from './UnifiedTradingAccount.js'
export type { UnifiedTradingAccountOptions, StagePlaceOrderParams, StageModifyOrderParams, StageClosePositionParams } from './UnifiedTradingAccount.js'

// Interfaces
export type {
  Position,
  PlaceOrderResult,
  OpenOrder,
  AccountInfo,
  Quote,
  FundingRate,
  OrderBookLevel,
  OrderBook,
  MarketClock,
  AccountCapabilities,
  IBroker,
} from './interfaces.js'

// AccountManager
export { AccountManager } from './account-manager.js'
export type {
  AccountSummary,
  AggregatedEquity,
  ContractSearchResult,
} from './account-manager.js'

// Trading-as-Git
export { TradingGit } from './git/index.js'
export type {
  ITradingGit,
  TradingGitConfig,
  CommitHash,
  Operation,
  OperationAction,
  OperationResult,
  OperationStatus,
  AddResult,
  CommitPrepareResult,
  PushResult,
  GitStatus,
  GitCommit,
  GitState,
  CommitLogEntry,
  GitExportState,
  OperationSummary,
  OrderStatusUpdate,
  SyncResult,
  PriceChangeInput,
  SimulatePriceChangeResult,
} from './git/index.js'

// Guards
export {
  createGuardPipeline,
  registerGuard,
  resolveGuards,
  MaxPositionSizeGuard,
  CooldownGuard,
  SymbolWhitelistGuard,
} from './guards/index.js'
export type {
  GuardContext,
  OperationGuard,
  GuardRegistryEntry,
} from './guards/index.js'

// Operation Dispatcher (internal, but exported for testing)
export { createOperationDispatcher } from './operation-dispatcher.js'

// Wallet State Bridge (internal, but exported for testing)
export { createWalletStateBridge } from './wallet-state-bridge.js'

// Platform
export type { IPlatform, PlatformCredentials } from './platform.js'
export { CcxtPlatform } from './brokers/ccxt/CcxtPlatform.js'
export type { CcxtPlatformConfig } from './brokers/ccxt/CcxtPlatform.js'
export { AlpacaPlatform } from './brokers/alpaca/AlpacaPlatform.js'
export type { AlpacaPlatformConfig } from './brokers/alpaca/AlpacaPlatform.js'
export {
  createPlatformFromConfig,
  createAccountFromConfig,
  validatePlatformRefs,
} from './platform-factory.js'

// AI Tool Factory
export { createTradingTools } from './adapter.js'

// Providers
export { AlpacaBroker } from './brokers/alpaca/index.js'
export type { AlpacaBrokerConfig } from './brokers/alpaca/index.js'
export { CcxtBroker } from './brokers/ccxt/index.js'
export { createCcxtProviderTools } from './brokers/ccxt/index.js'
export type { CcxtBrokerConfig } from './brokers/ccxt/index.js'
