import { type VariantProps, tv } from 'tailwind-variants';

const spacer = tv({
    base: '',
    variants: {
        height: {
            0: '',
            1: 'h-1',
            2: 'h-2',
            3: 'h-3',
            4: 'h-4',
            5: 'h-5',
            6: 'h-6',
            8: 'h-8',
            10: 'h-10',
            12: 'h-12',
            16: 'h-16',
            20: 'h-20',
            24: 'h-24',
            32: 'h-32',
            40: 'h-40',
            48: 'h-48',
            56: 'h-56',
            64: 'h-64',
            80: 'h-80',
            96: 'h-96',
        },
        width: {
            0: '',
            1: 'w-1',
            2: 'w-2',
            3: 'w-3',
            4: 'w-4',
            5: 'w-5',
            6: 'w-6',
            8: 'w-8',
            10: 'w-10',
            12: 'w-12',
            16: 'w-16',
            20: 'w-20',
            24: 'w-24',
            32: 'w-32',
            40: 'w-40',
            48: 'w-48',
            56: 'w-56',
            64: 'w-64',
            80: 'w-80',
            96: 'w-96',
        },
    },
    compoundVariants: [],
    defaultVariants: {
        height: 0,
        width: 0,
    },
});

export type SpacerVariantProps = VariantProps<typeof spacer>

export const Spacer = ({ width, height }: SpacerVariantProps) => {
    return (
        <div className={spacer({ width, height })}></div>
    )
} 