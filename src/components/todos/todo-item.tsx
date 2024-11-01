import { EditIcon, TrashIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const TodoItem = () => {
  return (
    <div className='p-3 my-4 border rounded border-primary bg-secondary'>
      <section className='flex items-center justify-between'>
        <h2 className='font-semibold'>제목</h2>
        <div className='flex gap-4'>
          <Button variant='ghost' size='sm' className='p-0'>
            <TrashIcon />
          </Button>
          <Button variant='ghost' size='sm' className='p-0'>
            <EditIcon />
          </Button>
        </div>
      </section>
      <Separator className='my-2 bg-primary' />
      <p className='text-xs text-gray-500'>
        내용...내용...내용...내용...내용...내용...내용...내용...내용...내용...내용...내용...내용...
      </p>
      <p className='mt-3 text-xs italic text-right text-gray-400'>
        {new Date().toDateString()}
      </p>
    </div>
  );
};

export default TodoItem;
