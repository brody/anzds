import * as React from 'react';
// import { Moon, Sun } from 'lucide-react';
// import { Icon } from 'astro-icon/components';
import { IconMoonStars, IconSunFilled, IconDeviceDesktop } from '@tabler/icons-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<'theme-light' | 'dark' | 'system'>('theme-light');

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setThemeState(isDarkMode ? 'dark' : 'theme-light');
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' className='text-neutral-900 dark:text-neutral-100'>
          <IconSunFilled className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <IconMoonStars className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setThemeState('theme-light')}>
          <IconSunFilled className='w-4 h-4 mr-2 scale-100 rotate-0 text-inherit' />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState('dark')}>
          {' '}
          <IconMoonStars className='w-4 h-4 mr-2 scale-100 rotate-0 text-inherit' />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState('system')}>
          {' '}
          <IconDeviceDesktop className='w-4 h-4 mr-2 scale-100 rotate-0 text-inherit' />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
