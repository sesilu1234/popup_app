import * as React from 'react';
import * as Separator from '@radix-ui/react-separator';

const SeparatorDemo = () => (
  <Separator.Root className="h-2 w-full my-[15px] bg-violet6 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />
);

export default SeparatorDemo;
