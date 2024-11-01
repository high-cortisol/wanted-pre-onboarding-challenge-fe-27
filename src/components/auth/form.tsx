import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
const AuthForm = () => {
  const form = useForm();
  return (
    <Form {...form}>
      <form className='flex flex-col gap-4 p-4 border rounded border-primary'>
        <FormField
          name='아이디'
          render={() => (
            <FormItem>
              <FormLabel>아이디</FormLabel>
              <FormControl>
                <Input placeholder='아이디를 입력하세요'></Input>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name='비밀번호'
          render={() => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input placeholder='비밀번호를 입력하세요'></Input>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default AuthForm;
