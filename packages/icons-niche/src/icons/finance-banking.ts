/** Domain: finance banking. Style spec: @syntara/icons create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '@syntara/icons';

export const IconAccountHolder = createIcon('account-holder', [
  ['circle', { cx: 8.5, cy: 7.5, r: 3.5 }],
  ['path', { d: 'M2.75 20c0-3.5 2.5-6 5.75-6 .9 0 1.75.2 2.5.5' }],
  ['rect', { x: 12.5, y: 13, width: 9, height: 7, rx: 2 }],
]);
export const IconAccountingLedger = createIcon('accounting-ledger', [
  ['path', { d: 'M19 3H7.5A2.5 2.5 0 0 0 5 5.5v13A2.5 2.5 0 0 0 7.5 21H19ZM5 18.5A2.5 2.5 0 0 1 7.5 16H19' }],
  ['path', { d: 'M14.25 7.5c-.3-.75-1-1.25-2-1.25-1.2 0-2 .6-2 1.5 0 2 4 1.25 4 3.25 0 .9-.8 1.5-2 1.5-1 0-1.7-.5-2-1.25M12.25 5v1.25M12.25 12.5v1.25' }],
]);
export const IconAudit = createIcon('audit', [
  ['rect', { x: 5, y: 4.5, width: 14, height: 16.5, rx: 3 }],
  ['rect', { x: 9, y: 3, width: 6, height: 3, rx: 1.25 }],
  ['path', { d: 'M9 13.5l2 2 4-4.5' }],
]);
export const IconBankPin = createIcon('bank-pin', [
  ['path', { d: 'M12.5 17H6a3.5 3.5 0 0 1-3.5-3.5v-3A3.5 3.5 0 0 1 6 7h12a3.5 3.5 0 0 1 3.5 3.5v.5' }],
  ['rect', { x: 14.25, y: 15.5, width: 7, height: 5.5, rx: 1.5 }],
  ['path', { d: 'M15.75 15.5V14a2 2 0 0 1 4 0v1.5' }],
  ['circle', { cx: 6.75, cy: 12, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10, cy: 12, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.25, cy: 12, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBankStatement = createIcon('bank-statement', [
  ['rect', { x: 5, y: 3, width: 14, height: 18, rx: 3 }],
  ['path', { d: 'M8.5 8h4.5M8.5 12h4.5M8.5 16h4.5' }],
  ['circle', { cx: 15.75, cy: 8, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15.75, cy: 12, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15.75, cy: 16, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBankTransfer = createIcon('bank-transfer', [
  ['path', { d: 'M2.75 9.5 8.75 5.5l6 4Z' }],
  ['path', { d: 'M5.25 12v4M12.25 12v4' }],
  ['path', { d: 'M2.75 18.5h12' }],
  ['path', { d: 'M17.75 8.5 21.25 12l-3.5 3.5' }],
]);
export const IconBanknotes = createIcon('banknotes', [
  ['path', { d: 'M5.5 8.5V6.5A2 2 0 0 1 7.5 4.5H19a2 2 0 0 1 2 2V12.5a2 2 0 0 1-2 2h-.5' }],
  ['rect', { x: 3, y: 8.5, width: 15.5, height: 10, rx: 2.5 }],
  ['circle', { cx: 10.75, cy: 13.5, r: 2.25 }],
]);
export const IconBillDue = createIcon('bill-due', [
  ['path', { d: 'M13 20.5H6.5A2.5 2.5 0 0 1 4 18V5.5A2.5 2.5 0 0 1 6.5 3h8A2.5 2.5 0 0 1 17 5.5V11M7.5 7.5h6M7.5 11h4' }],
  ['circle', { cx: 17.25, cy: 17, r: 4 }],
  ['path', { d: 'M17.25 15v2l1.25 1' }],
]);
export const IconBillPaid = createIcon('bill-paid', [
  ['path', { d: 'M13 20.5H6.5A2.5 2.5 0 0 1 4 18V5.5A2.5 2.5 0 0 1 6.5 3h8A2.5 2.5 0 0 1 17 5.5V11M7.5 7.5h6M7.5 11h4' }],
  ['circle', { cx: 17.25, cy: 17, r: 4 }],
  ['path', { d: 'M15.5 17l1.25 1.25 2.25-2.5' }],
]);
export const IconBondCertificate = createIcon('bond-certificate', [
  ['path', { d: 'M13 17.5H5.25a2.5 2.5 0 0 1-2.5-2.5V6.5A2.5 2.5 0 0 1 5.25 4h13.5a2.5 2.5 0 0 1 2.5 2.5V12.5' }],
  ['circle', { cx: 17, cy: 15.5, r: 2.75 }],
  ['path', { d: 'M15.25 17.75 14.75 21.5l2.25-1 2.25 1-.5-3.75' }],
  ['path', { d: 'M6.5 8h11M6.5 11.5h5' }],
]);
export const IconCandlestickChart = createIcon('candlestick-chart', [
  ['path', { d: 'M8 3.5V7H5.5v9.5h5V7H8' }],
  ['path', { d: 'M8 16.5v3.5' }],
  ['path', { d: 'M16 6.5V10h-2.5v6h5v-6H16' }],
  ['path', { d: 'M16 16v4' }],
]);
export const IconCardAdd = createIcon('card-add', [
  ['path', { d: 'M12.5 18.5H6a3.25 3.25 0 0 1-3.25-3.25v-6.5A3.25 3.25 0 0 1 6 5.5h12a3.25 3.25 0 0 1 3.25 3.25V11M2.75 9.5h18.5' }],
  ['path', { d: 'M17.75 14.25v6.5M14.5 17.5H21' }],
]);
export const IconCardContactless = createIcon('card-contactless', [
  ['rect', { x: 2.75, y: 5.5, width: 18.5, height: 13, rx: 3.25 }],
  ['path', { d: 'M10 10.5a2 2 0 0 1 0 3M12.75 9a4.25 4.25 0 0 1 0 6M15.5 7.75a6.25 6.25 0 0 1 0 8.5' }],
]);
export const IconCardFraud = createIcon('card-fraud', [
  ['path', { d: 'M12.5 18.5H6a3.25 3.25 0 0 1-3.25-3.25v-6.5A3.25 3.25 0 0 1 6 5.5h12a3.25 3.25 0 0 1 3.25 3.25V11M2.75 9.5h18.5' }],
  ['path', { d: 'M17.75 12.75 21.5 20.5h-7.5Z' }],
  ['path', { d: 'M17.75 15.5v2' }],
  ['circle', { cx: 17.75, cy: 19.1, r: 0.6, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCardLock = createIcon('card-lock', [
  ['path', { d: 'M12.5 18.5H6a3.25 3.25 0 0 1-3.25-3.25v-6.5A3.25 3.25 0 0 1 6 5.5h12a3.25 3.25 0 0 1 3.25 3.25V11M2.75 9.5h18.5' }],
  ['rect', { x: 14.25, y: 15.5, width: 7, height: 5.5, rx: 1.5 }],
  ['path', { d: 'M15.75 15.5V14a2 2 0 0 1 4 0v1.5' }],
]);
export const IconCardReader = createIcon('card-reader', [
  ['rect', { x: 5.5, y: 8, width: 13, height: 13, rx: 3 }],
  ['rect', { x: 8, y: 10.5, width: 8, height: 3.5, rx: 1 }],
  ['path', { d: 'M8.5 8V4.25A1.25 1.25 0 0 1 9.75 3h4.5a1.25 1.25 0 0 1 1.25 1.25V8' }],
  ['circle', { cx: 10, cy: 16.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 16.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10, cy: 18.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 18.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCardRefund = createIcon('card-refund', [
  ['path', { d: 'M12.5 18.5H6a3.25 3.25 0 0 1-3.25-3.25v-6.5A3.25 3.25 0 0 1 6 5.5h12a3.25 3.25 0 0 1 3.25 3.25V11M2.75 9.5h18.5' }],
  ['path', { d: 'M21 18h-5.5M17.5 15.75 15.25 18l2.25 2.25' }],
]);
export const IconCardStack = createIcon('card-stack', [
  ['rect', { x: 2.75, y: 8.5, width: 15.5, height: 11, rx: 3 }],
  ['path', { d: 'M6 8.5V7.5a2.75 2.75 0 0 1 2.75-2.75h9.75a2.75 2.75 0 0 1 2.75 2.75v6.25a2.75 2.75 0 0 1-2.75 2.75h-.25' }],
  ['path', { d: 'M2.75 12h15.5' }],
]);
export const IconCashEnvelope = createIcon('cash-envelope', [
  ['path', { d: 'M5.5 10V5A1.5 1.5 0 0 1 7 3.5h10A1.5 1.5 0 0 1 18.5 5v5' }],
  ['path', { d: 'M3 10v7.5A2.5 2.5 0 0 0 5.5 20h13a2.5 2.5 0 0 0 2.5-2.5V10' }],
  ['path', { d: 'M3 10l9 5 9-5' }],
  ['circle', { cx: 12, cy: 6.75, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCashback = createIcon('cashback', [
  ['path', { d: 'M4.5 12a7.5 7.5 0 1 0 2.2-5.3' }],
  ['path', { d: 'M6.5 3.25v3.5H10' }],
  ['path', { d: 'M14 9.5c-.35-.8-1.1-1.25-2.05-1.25-1.2 0-2.05.65-2.05 1.55 0 2.1 4.25 1.3 4.25 3.4 0 .95-.85 1.55-2.2 1.55-1.05 0-1.85-.5-2.2-1.35' }],
  ['path', { d: 'M12 7v10' }],
]);
export const IconCheque = createIcon('cheque', [
  ['rect', { x: 2.5, y: 6, width: 19, height: 12, rx: 2.5 }],
  ['path', { d: 'M6 10h7' }],
  ['path', { d: 'M6 14.5c.75-1.25 1.5-1.25 2 0s1.25 1.25 2 0 1.25-1.25 2 0M15 14.5h3' }],
]);
export const IconChipCard = createIcon('chip-card', [
  ['rect', { x: 2.75, y: 5.5, width: 18.5, height: 13, rx: 3.25 }],
  ['rect', { x: 6, y: 9, width: 5, height: 4, rx: 1.25 }],
  ['path', { d: 'M6 15.5h3' }],
]);
export const IconCoinDollar = createIcon('coin-dollar', [
  ['circle', { cx: 12, cy: 12, r: 9 }],
  ['path', { d: 'M14.5 9c-.4-1-1.3-1.5-2.5-1.5-1.4 0-2.4.75-2.4 1.8 0 2.4 5 1.5 5 3.9 0 1.1-1 1.8-2.6 1.8-1.2 0-2.2-.6-2.6-1.6M12 6v1.5M12 15v1.5' }],
]);
export const IconCoinPurse = createIcon('coin-purse', [
  ['path', { d: 'M4.5 10h15l.5 4.5c.4 3.5-2.5 6-6 6h-4c-3.5 0-6.4-2.5-6-6Z' }],
  ['path', { d: 'M6.5 10c0-2 1.5-3.25 3.5-3.25M17.5 10c0-2-1.5-3.25-3.5-3.25' }],
  ['path', { d: 'M9.8 5.5a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0M12 5.5a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0' }],
]);
export const IconCoinStack = createIcon('coin-stack', [
  ['rect', { x: 5, y: 16.5, width: 14, height: 4, rx: 2 }],
  ['rect', { x: 5, y: 12.5, width: 14, height: 4, rx: 2 }],
  ['rect', { x: 5, y: 8.5, width: 14, height: 4, rx: 2 }],
]);
export const IconCreditScore = createIcon('credit-score', [
  ['path', { d: 'M3.5 16a8.5 8.5 0 0 1 17 0' }],
  ['path', { d: 'M12 16l4.25-4.5' }],
  ['circle', { cx: 12, cy: 16, r: 1.25, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCurrencyCent = createIcon('currency-cent', [
  ['path', { d: 'M15.5 8.5a4.5 4.5 0 1 0 0 7' }],
  ['path', { d: 'M12.5 4.5v15' }],
]);
export const IconCurrencyExchange = createIcon('currency-exchange', [
  ['circle', { cx: 7.5, cy: 7.5, r: 4 }],
  ['circle', { cx: 16.5, cy: 16.5, r: 4 }],
  ['path', { d: 'M13.25 5.5h2.75a2.5 2.5 0 0 1 2.5 2.5v1.75l1.75-1.75' }],
  ['path', { d: 'M10.75 18.5H8a2.5 2.5 0 0 1-2.5-2.5v-1.75l-1.75 1.75' }],
]);
export const IconCurrencyFranc = createIcon('currency-franc', [
  ['path', { d: 'M9 19.5V4.75h8M9 11.5h6.5' }],
  ['path', { d: 'M6.5 15.5h6' }],
]);
export const IconCurrencyLira = createIcon('currency-lira', [
  ['path', { d: 'M9.5 4v15.25c3.75 0 6.75-2.75 6.75-6.25' }],
  ['path', { d: 'M6.5 10.5l7-3M6.5 14l7-3' }],
]);
export const IconCurrencyNaira = createIcon('currency-naira', [
  ['path', { d: 'M7.5 19.5V4.75l9 14.75V4.75' }],
  ['path', { d: 'M4.75 10h14.5M4.75 13.5h14.5' }],
]);
export const IconCurrencyPeso = createIcon('currency-peso', [
  ['path', { d: 'M8.5 19.5V4.75h4.5a3.75 3.75 0 0 1 0 7.5H8.5' }],
  ['path', { d: 'M6 7.5h12M6 10h12' }],
]);
export const IconCurrencyPound = createIcon('currency-pound', [
  ['path', { d: 'M16 7.25A3.5 3.5 0 0 0 9.5 8.75V14c0 2.25-1 3.75-2.5 5.25H17' }],
  ['path', { d: 'M7 12.5h6.5' }],
]);
export const IconCurrencyRuble = createIcon('currency-ruble', [
  ['path', { d: 'M8.5 19.5V4.75h5a4 4 0 0 1 0 8H6.5' }],
  ['path', { d: 'M6.5 16h8' }],
]);
export const IconCurrencyShekel = createIcon('currency-shekel', [
  ['path', { d: 'M6 19V5h5a3 3 0 0 1 3 3v6' }],
  ['path', { d: 'M18 5v14h-5a3 3 0 0 1-3-3v-6' }],
]);
export const IconCurrencyWon = createIcon('currency-won', [
  ['path', { d: 'M4.75 5l3 14 4.25-11 4.25 11 3-14' }],
  ['path', { d: 'M3.25 10h17.5M3.25 13.5h17.5' }],
]);
export const IconCurrencyYen = createIcon('currency-yen', [
  ['path', { d: 'M6.5 4.75 12 12l5.5-7.25M12 12v7.25' }],
  ['path', { d: 'M8 13h8M8 16.5h8' }],
]);
export const IconDeposit = createIcon('deposit', [
  ['rect', { x: 6, y: 2.75, width: 12, height: 7, rx: 2 }],
  ['path', { d: 'M12 11.5v5.75M9.75 15 12 17.25 14.25 15' }],
  ['path', { d: 'M4 14.5v3.5a2.5 2.5 0 0 0 2.5 2.5h11a2.5 2.5 0 0 0 2.5-2.5v-3.5' }],
  ['circle', { cx: 12, cy: 6.25, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconDonationBox = createIcon('donation-box', [
  ['rect', { x: 3.5, y: 11, width: 17, height: 9.5, rx: 3 }],
  ['path', { d: 'M9 14h6' }],
  ['path', { d: 'M12 9.25c-2-1.5-3.75-2.75-3.75-4.1a1.9 1.9 0 0 1 3.75-.4 1.9 1.9 0 0 1 3.75.4c0 1.35-1.75 2.6-3.75 4.1Z' }],
]);
export const IconFinancialReport = createIcon('financial-report', [
  ['rect', { x: 5, y: 3, width: 14, height: 18, rx: 3 }],
  ['path', { d: 'M9 17v-3M12 17v-6M15 17V9' }],
]);
export const IconFixedDeposit = createIcon('fixed-deposit', [
  ['rect', { x: 3, y: 16.5, width: 11, height: 4, rx: 2 }],
  ['rect', { x: 3, y: 12.5, width: 11, height: 4, rx: 2 }],
  ['rect', { x: 14.5, y: 13.5, width: 7, height: 6, rx: 1.5 }],
  ['path', { d: 'M16 13.5v-1.75a2 2 0 0 1 4 0v1.75' }],
]);
export const IconGoldBars = createIcon('gold-bars', [
  ['path', { d: 'M3 20.5l1.25-4.5h6.5L12 20.5Z' }],
  ['path', { d: 'M12 20.5l1.25-4.5h6.5L21 20.5Z' }],
  ['path', { d: 'M7.5 16l1.25-4.5h6.5L16.5 16Z' }],
]);
export const IconInflation = createIcon('inflation', [
  ['path', { d: 'M3 10.5V5a2 2 0 0 1 2-2h5.5l7 7-7.5 7.5Z' }],
  ['path', { d: 'M19 21v-7.5M16.5 16l2.5-2.5 2.5 2.5' }],
  ['circle', { cx: 7, cy: 7, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconInterestRate = createIcon('interest-rate', [
  ['path', { d: 'M4.5 17 12.5 7M4 8.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0M9.5 15.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0' }],
  ['path', { d: 'M17.5 19V5M14.75 7.75 17.5 5l2.75 2.75' }],
]);
export const IconInvestment = createIcon('investment', [
  ['rect', { x: 3, y: 16.5, width: 11, height: 4, rx: 2 }],
  ['rect', { x: 3, y: 12.5, width: 11, height: 4, rx: 2 }],
  ['path', { d: 'M17.5 20.5v-8M17.5 12.5c0-3 1.75-5 4-5.5.25 3-1.5 5.25-4 5.5ZM17.5 15c0-2.5-1.5-4-3.5-4.5-.25 2.5 1.25 4.25 3.5 4.5' }],
]);
export const IconLoan = createIcon('loan', [
  ['path', { d: 'M11.5 15.5H5.25a2.5 2.5 0 0 1-2.5-2.5V8.5A2.5 2.5 0 0 1 5.25 6h10.5a2.5 2.5 0 0 1 2.5 2.5V10' }],
  ['circle', { cx: 17, cy: 16, r: 4.5 }],
  ['path', { d: 'M17 13.75V16l1.5 1.25' }],
  ['circle', { cx: 8.5, cy: 10.75, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconLoss = createIcon('loss', [
  ['rect', { x: 3, y: 16.5, width: 11, height: 4, rx: 2 }],
  ['rect', { x: 3, y: 12.5, width: 11, height: 4, rx: 2 }],
  ['path', { d: 'M18 4v15.5M15 16.5l3 3 3-3' }],
]);
export const IconMobileBanking = createIcon('mobile-banking', [
  ['rect', { x: 6, y: 2.75, width: 12, height: 18.5, rx: 3 }],
  ['path', { d: 'M8.75 10.25 12 7.75l3.25 2.5Z' }],
  ['path', { d: 'M10 12v3M14 12v3' }],
  ['path', { d: 'M8.75 17h6.5' }],
]);
export const IconMoneyBag = createIcon('money-bag', [
  ['path', { d: 'M9 7.5 7.5 4h9L15 7.5' }],
  ['path', { d: 'M9 7.5C5.5 9.5 4 13 4 16a4.5 4.5 0 0 0 4.5 4.5h7A4.5 4.5 0 0 0 20 16c0-3-1.5-6.5-5-8.5Z' }],
  ['path', { d: 'M13.75 11.5h-2.5a1.25 1.25 0 0 0 0 2.5h1.5a1.25 1.25 0 0 1 0 2.5h-2.5M12 10.25v1.25M12 16.5v1.25' }],
]);
export const IconMortgage = createIcon('mortgage', [
  ['path', { d: 'M3.75 11 12 4l8.25 7M5.75 9.5V19a1.5 1.5 0 0 0 1.5 1.5h9.5a1.5 1.5 0 0 0 1.5-1.5V9.5' }],
  ['path', { d: 'M10 17l4-5' }],
  ['circle', { cx: 10.25, cy: 12.5, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.75, cy: 16.5, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconNestEgg = createIcon('nest-egg', [
  ['path', { d: 'M8.1 13A4 5.25 0 1 1 15.9 13' }],
  ['path', { d: 'M3 13h18c-.5 4.5-4.25 7.5-9 7.5S3.5 17.5 3 13Z' }],
  ['path', { d: 'M5.75 15.75l2.1 1.75 2.05-1.75 2.1 1.75 2.1-1.75 2.05 1.75 2.1-1.75' }],
]);
export const IconPaymentSchedule = createIcon('payment-schedule', [
  ['rect', { x: 3, y: 5, width: 18, height: 15.5, rx: 3.25 }],
  ['path', { d: 'M8 3.25V6.5M16 3.25V6.5M3 9.5h18' }],
  ['circle', { cx: 12, cy: 15, r: 2.75 }],
]);
export const IconProfit = createIcon('profit', [
  ['rect', { x: 3, y: 16.5, width: 11, height: 4, rx: 2 }],
  ['rect', { x: 3, y: 12.5, width: 11, height: 4, rx: 2 }],
  ['path', { d: 'M18 20V5M15 8l3-3 3 3' }],
]);
export const IconRemittance = createIcon('remittance', [
  ['circle', { cx: 12, cy: 14.25, r: 6.5 }],
  ['ellipse', { cx: 12, cy: 14.25, rx: 2.75, ry: 6.5 }],
  ['path', { d: 'M4.5 6.5c4.25-3.75 10.75-3.75 15 0' }],
  ['path', { d: 'M19.75 3.5v3.25H16.5' }],
]);
export const IconRequestMoney = createIcon('request-money', [
  ['rect', { x: 3, y: 3.5, width: 15, height: 9.5, rx: 2.5 }],
  ['path', { d: 'M20.5 18H8M10.5 15.5 8 18l2.5 2.5' }],
  ['circle', { cx: 10.5, cy: 8.25, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSavingsJar = createIcon('savings-jar', [
  ['path', { d: 'M8 7.5v1.25C6 9.5 5 11 5 13v4.5A3.5 3.5 0 0 0 8.5 21h7a3.5 3.5 0 0 0 3.5-3.5V13c0-2-1-3.5-3-4.25V7.5' }],
  ['rect', { x: 7, y: 3.25, width: 10, height: 4.25, rx: 1.5 }],
  ['path', { d: 'M13.75 12.25h-2.5a1.25 1.25 0 0 0 0 2.5h1.5a1.25 1.25 0 0 1 0 2.5h-2.5M12 11v1.25M12 17.25v1.25' }],
]);
export const IconSecurePayment = createIcon('secure-payment', [
  ['rect', { x: 5, y: 10, width: 14, height: 11, rx: 3 }],
  ['path', { d: 'M8 10V7a4 4 0 0 1 8 0v3' }],
  ['path', { d: 'M13.5 13.25h-2a1 1 0 0 0 0 2h1a1 1 0 0 1 0 2h-2M12 12.25v1M12 17.25v1' }],
]);
export const IconSendMoney = createIcon('send-money', [
  ['rect', { x: 3, y: 3.5, width: 15, height: 9.5, rx: 2.5 }],
  ['path', { d: 'M8 18h12.5M18 15.5l2.5 2.5-2.5 2.5' }],
  ['circle', { cx: 10.5, cy: 8.25, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconTapToPay = createIcon('tap-to-pay', [
  ['rect', { x: 3.5, y: 3.5, width: 10, height: 17, rx: 3 }],
  ['path', { d: 'M16 9a4.25 4.25 0 0 1 0 6M18.75 7a7.25 7.25 0 0 1 0 10' }],
]);
export const IconTaxForm = createIcon('tax-form', [
  ['rect', { x: 5, y: 3, width: 14, height: 18, rx: 3 }],
  ['path', { d: 'M9.5 16l5-6.5' }],
  ['circle', { cx: 9.75, cy: 10.25, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.25, cy: 15.25, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconTaxRefund = createIcon('tax-refund', [
  ['path', { d: 'M13 20.5H6.5A2.5 2.5 0 0 1 4 18V5.5A2.5 2.5 0 0 1 6.5 3h8A2.5 2.5 0 0 1 17 5.5V11' }],
  ['path', { d: 'M7.5 12.5l5-5.5' }],
  ['path', { d: 'M21 18h-6M17.5 15.5 15 18l2.5 2.5' }],
  ['circle', { cx: 7.75, cy: 7.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12.25, cy: 12.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconTradingScreen = createIcon('trading-screen', [
  ['rect', { x: 3, y: 4, width: 18, height: 12.5, rx: 3 }],
  ['path', { d: 'M6.5 13l3-3 2.5 2 5-4.5' }],
  ['path', { d: 'M9 20.5h6M12 16.5v4' }],
]);
export const IconUtilityBill = createIcon('utility-bill', [
  ['path', { d: 'M5.5 4.5A1.5 1.5 0 0 1 7 3h10a1.5 1.5 0 0 1 1.5 1.5V21l-2.15-1.5-2.2 1.5L12 19.5 9.85 21l-2.2-1.5L5.5 21Z' }],
  ['path', { d: 'M12.75 6.5 9.75 11.5h4.5L11.25 16.5' }],
]);
export const IconWalletCards = createIcon('wallet-cards', [
  ['rect', { x: 3.5, y: 9, width: 17, height: 11.5, rx: 3.5 }],
  ['path', { d: 'M6 9V6.5A1.5 1.5 0 0 1 7.5 5L15.5 3.5A1.5 1.5 0 0 1 17.25 5V9' }],
  ['path', { d: 'M20.5 13h-3a1.75 1.75 0 0 0 0 3.5h3' }],
]);
export const IconWithdrawal = createIcon('withdrawal', [
  ['rect', { x: 6, y: 2.75, width: 12, height: 7, rx: 2 }],
  ['path', { d: 'M12 17.25V11.5M9.75 13.75 12 11.5l2.25 2.25' }],
  ['path', { d: 'M4 14.5v3.5a2.5 2.5 0 0 0 2.5 2.5h11a2.5 2.5 0 0 0 2.5-2.5v-3.5' }],
  ['circle', { cx: 12, cy: 6.25, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
