export interface InvestmentInput {
    monthlySaving: number;    // จำนวนเงินออมต่อเดือน
    savingPeriod: number;     // ระยะเวลาออม (ปี)
    btcGrowth: number;        // อัตราการเติบโตของ BTC ต่อปี (%)
}

export interface InvestmentResult {
    principal: number;               // เงินต้นทั้งหมด
    fvResult: number;                // มูลค่าอนาคต (Future Value)
    adjustedPurchasingPower: number; // มูลค่าที่ปรับอัตราเงินเฟ้อ/เงินฝืด
    totalPowerLossPercent: number;   // เปอร์เซ็นต์อำนาจซื้อที่ลดลง
}

//คำนวณมูลค่าการลงทุน และปรับมูลค่าตามอัตราเงินเฟ้อของเงินเฟียต

export function CalculateInvestment({
                                        monthlySaving,
                                        savingPeriod,
                                        btcGrowth,
                                    }: InvestmentInput): InvestmentResult {
    const totalMonths = savingPeriod * 12;
    const principal = monthlySaving * totalMonths;
    const monthlyRate = btcGrowth / 100 / 12;

    let fvResult = principal;

    if (monthlyRate > 0) {
        // คำนวณ Future Value แบบ Annuity Due (ฝากต้นงวด)
        fvResult =
            monthlySaving *
            ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
            (1 + monthlyRate);
    }

    const fiatDilutionRate = 0.07; // อัตราเงินเฟ้อเฟียต 7%

    // คำนวณอำนาจซื้อที่แท้จริงหลังจากโดนเงินเฟ้อลดทอน
    const adjustedPurchasingPower =
        fvResult / Math.pow(1 + fiatDilutionRate, savingPeriod);

    // ปรับสูตรให้ได้ค่าเป็นบวก (เช่น ลดลงไป 30%) เพื่อความเข้าใจง่ายในหน้า UI
    const totalPowerLossPercent =
        fvResult > 0 ? ((fvResult - adjustedPurchasingPower) / fvResult) * 100 : 0;

    return {
        principal: Math.round(principal),
        fvResult: Math.round(fvResult),
        adjustedPurchasingPower: Math.round(adjustedPurchasingPower),
        totalPowerLossPercent,
    };
}