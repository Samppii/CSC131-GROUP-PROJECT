import './QuestionAnswer.css';
import clsx from 'clsx';
import type React from 'react';
import { useEffect, useRef } from 'react';
import Icon from './Icon';

export interface QuestionAnswerProps {
	question: string;
	last?: boolean;
	open: boolean;
	onClick: OnClick;
	className: string;
}

type OnClick = React.ComponentPropsWithoutRef<'button'>['onClick'];

export default function QuestionAnswer({
	question,
	children,
	open,
	onClick,
	className,
	last = false,
}: React.PropsWithChildren<QuestionAnswerProps>) {
	const ref = useRef<HTMLButtonElement>(null);
	const answerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (answerRef.current && ref.current) {
			const collapsedHeight = ref.current.clientHeight;
			const expandedHeight = answerRef.current.clientHeight + collapsedHeight;

			ref.current.style.setProperty(
				'--collapsed-height',
				`${collapsedHeight}px`,
			);
			ref.current.style.setProperty('--expanded-height', `${expandedHeight}px`);
		}
	}, []);

	return (
		<button
			className={clsx(
				'QuestionAnswer',
				className,
				open && 'is-expanded',
				last && 'QuestionAnswer--last',
			)}
			type='button'
			onClick={onClick}
			ref={ref}
		>
			<p className='QuestionAnswer-question'>
				{question}
				<Icon
					className={clsx('QuestionAnswer-icon', open && 'is-enabled')}
					icon='tabler:square-plus'
				/>
			</p>
			<p
				className='QuestionAnswer-answer'
				onClick={e => e.stopPropagation()}
				onKeyDown={e => e.stopPropagation()}
				ref={answerRef}
			>
				{children}
			</p>
		</button>
	);
}
