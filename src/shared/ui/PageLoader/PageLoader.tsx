import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/classNames';
import cls from './PageLoader..module.scss';
import { Loader } from '../Loader/Loader';

interface PageLoaderProps {
    className?:string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
