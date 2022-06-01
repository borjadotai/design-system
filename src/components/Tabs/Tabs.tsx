import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../Typography';

/* PSA: This is not a re-usable component but rather an experiment */

type Options = 'Home' | 'Work' | 'Tech' | 'Blog';

const Tabs = () => {
  const [focused, setFocused] = React.useState<Options | null>(null);
  const [selected, setSelected] = React.useState<Options>('Home');
  const tabs: Options[] = ['Home', 'Work', 'Tech', 'Blog'];

  return (
    <ul className="flex items-center py-2 w-fit gap-6" onMouseLeave={() => setFocused(null)}>
      {tabs.map((item, i) => (
        <li
          key={item}
          onClick={() => setSelected(item)}
          onKeyDown={(event: { key: string }) => (event.key === 'Enter' ? setSelected(item) : null)}
          onFocus={() => setFocused(item)}
          onMouseEnter={() => setFocused(item)}
          tabIndex={0}
          className="relative cursor-pointer w-12 h-8"
        >
          <div className="w-fit">
            <Text
              className={`absolute z-20 top-0.5 mr-auto ml-auto font-semibold select-none ${
                selected === item ? '' : 'text-secondary dark:text-dark-secondary'
              }`}
            >
              {item}
            </Text>
            {focused === item ? (
              <motion.div
                transition={{
                  layout: {
                    duration: 0.2,
                    ease: 'easeOut',
                  },
                }}
                className={`absolute -bottom-0.5 ${
                  i === 0 ? '-left-[20%]' : i === tabs.length - 1 ? '-left-[31%]' : '-left-[25%]'
                } w-[140%] h-[110%] bg-foreground dark:bg-dark-foreground rounded-md z-0 mr-auto ml-auto`}
                layoutId="highlight"
              />
            ) : null}
          </div>
          {selected === item ? (
            <motion.div
              style={{
                position: 'absolute',
                bottom: '-10px',
                left: i === 0 ? '0px' : i === tabs.length - 1 ? '-6px' : '-3px',
                right: 0,
                height: '4px',
                background: '#5686F5',
                borderRadius: '8px',
                zIndex: 0,
              }}
              // className={`absolute -bottom-[10px] ${
              //   i === 0 ? '' : i === tabs.length - 1 ? '-left-1]' : '-left-0.5'
              // } h-[4px] bg-dark-brand rounded-full z-0`}
              layoutId="underline"
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
