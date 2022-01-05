export class Formula {
    public entropia(str: string) {
        const len = str.length
       
        const frecuencia_str = Array.from(str)
            .reduce((freq: any, c: any) => (freq[c] = (freq[c] || 0) + 1) && freq, {});
        
        const frecuencia = Object.values(frecuencia_str)
            .reduce((sum: any, f: any) => sum - f/len * Math.log2(f/len), 0);

        const format = (num: any, decimals: any) => num.toLocaleString('en-US', {
            minimumFractionDigits: 2,      
            maximumFractionDigits: 2,
        });

        return Number(format(frecuencia, 2));
    }
}