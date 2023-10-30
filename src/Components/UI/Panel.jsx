import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );

  return (
    <div {...rest} className={twMerge(finalClassNames)}>
      {children}
    </div>
  );
}

export default Panel;
