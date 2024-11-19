// modules
import { cva } from 'class-variance-authority';
// lib
import { cn } from '@/lib/utils';

type DropProps = {
  corner?: 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right';
  className?: string;
  text?: string;
  variant?: 'outline' | 'fill';
  color?: string;
};

export default function Drop({ corner, className, text, variant, color }: DropProps) {
  const dropVariants = cva(
    'w-[35px] h-[35px] flex justify-center items-center rounded-full', 
    {
      variants: {
        corner: {
          'bottom-left': 'rounded-bl-none',
          'bottom-right': 'rounded-br-none',
          'top-left': 'rounded-tl-none',
          'top-right': 'rounded-tr-none',
        },
        variant: {
          outline: 'bg-transparent border-2 border-accent',
          fill: 'bg-accent',
        },
      },
      defaultVariants: {
        corner: 'bottom-left',
        variant: 'fill',
      },
    }
  );

  const style = color
    ? {
        backgroundColor: variant === 'outline' ? 'transparent' : color,
        borderColor: variant === 'outline' ? color : 'transparent',
      }
    : undefined;

  return (
    <div className={cn(className, dropVariants({ corner, variant }))} style={style}>
      {text && <p className="text-[20px] text-textLight">{text}</p>}
    </div>
  );
}



// // modules
// import { cva } from 'class-variance-authority'
// // lib
// import { cn } from '@/lib/utils'

// type DropProps = {
// 	corner?: 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right'
// 	className?: string
// 	text?: string
// 	variant?: 'outline' | 'fill'
// 	color?: string
// }

// export default function Drop({
// 	corner,
// 	className,
// 	text,
// 	variant,
// 	color,
// }: DropProps) {
// 	const dropVariants = cva('flex', {
// 		variants: {
// 			corner: {
// 				['bottom-left']: 'rounded-bl-none',
// 				['bottom-right']: 'rounded-br-none',
// 				['top-left']: 'rounded-tl-none',
// 				['top-right']: 'rounded-tr-none',
// 			},
// 			variant: {
// 				['outline']: 'bg-transparent border-2 border-accent',
// 				['fill']: 'bg-accent ',
// 			},
// 		},
// 		defaultVariants: {
// 			corner: 'bottom-left',
// 			variant: 'fill',
// 		},
// 	})

// 	return (
// 		<div
// 			className={cn(
// 				'w-[35px] h-[35px] flex justify-center items-center rounded-full',
// 				className,
// 				dropVariants({ corner, variant })
// 			)}
// 			{...(color
// 				? {
// 						style: {
// 							backgroundColor:
// 								variant === 'outline' ? 'transparent' : color,
// 							borderColor: variant === 'outline' ? color : 'transparent',
// 						},
// 				  }
// 				: {})}
// 		>
// 			{text && <p className="text-[20px] text-textLight">{text}</p>}
// 		</div>
// 	)
// }
