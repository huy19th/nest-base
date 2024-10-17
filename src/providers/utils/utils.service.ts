import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UtilsService {

    logger: Logger = new Logger(UtilsService.name, { timestamp: true });

    randomFromArray<T>(arr: T[], length?: number): T {
        length = length || arr.length;
        return arr[Math.floor(Math.random() * length)];
    }

    randomUniqueFromArray<T>(arr: T[], count: number): T[] {
        if (count >= arr.length) return arr;
        length = length || arr.length;
        const arrIndex = arr.map((item, index) => index);
        const result = [];
        while (result.length < count) {
            const [randomIndex] = result.splice(Math.floor(Math.random() * arrIndex.length), 1);
            result.push(arr[randomIndex]);
        }
        return result;
    }

    isSameDate(
        date1: Date | string,
        date2: Date | string
    ): boolean {
        try {
            date1 = new Date(date1);
            date2 = new Date(date2);
            return (
                date1.getFullYear() === date2.getFullYear() &&
                date1.getMonth() === date2.getMonth() &&
                date1.getDate() === date2.getDate()
            );
        }
        catch (err) {
            this.logger.error(err.message);
            return false;
        }
    }

    getItemsMissingFromArr<T>(
        arr1: Array<T>,
        arr2: Array<T>,
        option: "first" | "second" | "both"
    ): Array<T> {
        try {
            if (option === "first") {
                return arr1.filter(item1 => !arr2.find(item2 => JSON.stringify(item1) === JSON.stringify(item2)));
            }
            else if (option === "second") {
                return arr2.filter(item2 => !arr1.find(item1 => JSON.stringify(item2) === JSON.stringify(item1)));
            }
            else if (option === "both") {
                return [
                    ...arr1.filter(item1 => !arr2.find(item2 => JSON.stringify(item1) === JSON.stringify(item2))),
                    ...arr2.filter(item2 => !arr1.find(item1 => JSON.stringify(item2) === JSON.stringify(item1)))
                ]
            }
        }
        catch (err) {
            this.logger.error(err.message);
            return [];
        }
    }

    getDateRange(
        fromDate: Date | string,
        toDate: Date | string,
        excludeWeekends: boolean = false
    ): Date[] {
        try {
            const dateRange: Date[] = [];
            const endDate = new Date(toDate);
            endDate.setDate(endDate.getDate() + 1);
            for (
                const date = new Date(fromDate);
                date < endDate;
                date.setDate(date.getDate() + 1)
            ) {
                if (
                    excludeWeekends &&
                    (date.getDate() == 0 || date.getDate() == 6)
                ) continue;
                dateRange.push(new Date(date));
            }
            return dateRange;
        }
        catch (err) {
            this.logger.error(err.message);
            return [];
        }
    }

    async promiseAllLimit(promises: Promise<any>[], limit: number = 5) {
        if (!Number.isInteger(limit) || limit < 2) {
            throw new Error("Invalid limit value. Limit must be an integer greater than 1.");
        }
        const results: any[] = [];
        while (promises.length > 0) {
            const limitedResults = await Promise.all(
                promises.splice(0, limit)
            );
            results.push(...limitedResults.flat(2));
        }
        return results;
    }
}
