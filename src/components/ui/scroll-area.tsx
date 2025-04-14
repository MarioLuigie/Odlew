// 'use client'

// import * as React from 'react'
// import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
// import Drop from '@/components/shared/Drop'

// import { cn } from '@/lib/utils'

// const ScrollArea = React.forwardRef<
// 	React.ElementRef<typeof ScrollAreaPrimitive.Root>,
// 	React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
// >(({ className, children, ...props }, ref) => (
// 	<ScrollAreaPrimitive.Root
// 		ref={ref}
// 		className={cn(
// 			'relative overflow-y-visible border-transparent border-r-[#363836]',
// 			className
// 		)}
// 		{...props}
// 	>
// 		<ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
// 			{children}
// 		</ScrollAreaPrimitive.Viewport>
// 		<ScrollBar />
// 		<ScrollAreaPrimitive.Corner />
// 	</ScrollAreaPrimitive.Root>
// ))
// ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

// const ScrollBar = React.forwardRef<
// 	React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
// 	React.ComponentPropsWithoutRef<
// 		typeof ScrollAreaPrimitive.ScrollAreaScrollbar
// 	>
// >(({ className, orientation = 'vertical', ...props }, ref) => (
// 	<ScrollAreaPrimitive.ScrollAreaScrollbar
// 		ref={ref}
// 		orientation={orientation}
// 		className={cn(
// 			'flex touch-none select-none transition-colors',
// 			orientation === 'vertical' &&
// 				'h-full w-[20px] border-l border-l-transparent p-[1px]',
// 			orientation === 'horizontal' &&
// 				'h-2.5 flex-col border-t border-t-transparent p-[1px]',
// 			className
// 		)}
// 		{...props}
// 	>
// 		<ScrollAreaPrimitive.ScrollAreaThumb className="relative rounded-full">
// 			<div className="relative flex justify-center items-start w-full h-[40px]">
// 				<Drop className="w-[40px] h-[40px] bg-red-600 absolute translate-x-[20px]"></Drop>
// 			</div>
// 		</ScrollAreaPrimitive.ScrollAreaThumb>
// 	</ScrollAreaPrimitive.ScrollAreaScrollbar>
// ))
// ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

// export { ScrollArea, ScrollBar }

'use client'

import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import Drop from '@/components/shared/Drop'

import { cn } from '@/lib/utils'

const ScrollArea = React.forwardRef<
	React.ElementRef<typeof ScrollAreaPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
	<ScrollAreaPrimitive.Root
		ref={ref}
		className={cn(
			'relative overflow-y-visible border-transparent border-l-[#363836] w-full',
			className
		)}
		{...props}
	>
		<ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]"> 
			{children}
		</ScrollAreaPrimitive.Viewport>
		<ScrollBar />
		<ScrollAreaPrimitive.Corner />
	</ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
	React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
	React.ComponentPropsWithoutRef<
		typeof ScrollAreaPrimitive.ScrollAreaScrollbar
	>
>(({ className, orientation = 'vertical', ...props }, ref) => (
	<ScrollAreaPrimitive.ScrollAreaScrollbar
		ref={ref}
		orientation={orientation}
		className={cn(
			'flex touch-none select-none transition-colors absolute left-0 right-auto', // Przesunięcie na lewo
			orientation === 'vertical' &&
				'h-full w-[20px] border-r border-r-transparent p-[1px]', // border po prawej zamiast lewej
			orientation === 'horizontal' &&
				'h-2.5 flex-col border-t border-t-transparent p-[1px]',
			className
		)}
		{...props}
	>
		<ScrollAreaPrimitive.ScrollAreaThumb className="relative rounded-full">
			<div className="relative flex justify-center items-start w-full h-[40px]">
				<div className='absolute right-[1.5px] w-[2px] h-[40px] bg-[#E36A00]'></div>
				<Drop color='#E36A00' variant='outline' corner='bottom-right' className="w-[40px] h-[40px] absolute -left-[23px] -rotate-45"></Drop>
			</div>
		</ScrollAreaPrimitive.ScrollAreaThumb>
	</ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }

