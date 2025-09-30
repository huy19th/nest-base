import { ExecutionContext, createParamDecorator } from '@nestjs/common';
// import {GqlExecutionContext} from '@nestjs/graphql';

export const getPreferredLanguage = (acceptLanguage: string): string => {
    if (!acceptLanguage) return 'vi';
    const supportedLanguages = ['vi', 'en', 'ja'];
    const languagePreferences = acceptLanguage
        .split(',')
        .map(lang => {
            const [language, q = '1'] = lang.split(';q=')
            return { language: language.trim(), q: Number.parseFloat(q) }
        })
        .sort((a, b) => b.q - a.q); // Sort by quality factor (descending)

    // Find the first supported language
    for (const { language } of languagePreferences) {
        const primaryLang = language.split('-')[0]; // Extract primary language (e.g., 'en' from 'en-US')
        if (supportedLanguages.includes(primaryLang)) {
            return primaryLang;
        }
    }

    // Fallback to Vietnamese
    return 'vi';
}

export const AcceptLangauge = createParamDecorator(
    (_data: unknown, ctx: ExecutionContext) => {
        // const request = GqlExecutionContext.create(ctx).getContext().req
        const request = ctx.switchToHttp().getRequest();
        const acceptLanguage = request.headers['accept-language'];
        return getPreferredLanguage(acceptLanguage);
    },
)
