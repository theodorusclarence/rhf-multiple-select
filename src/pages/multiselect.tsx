import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import SelectInput from '@/components/forms/SelectInput';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const schools = [
  { value: '1', key: 'SMA JAKARTA 1' },
  { value: '2', key: 'SMA JAKARTA 2' },
  { value: '3', key: 'SMA JAKARTA 3' },
  { value: '4', key: 'SMA JAKARTA 4' },
  { value: '5', key: 'SMA JAKARTA 5' },
  { value: '6', key: 'SMA JAKARTA 6' },
  { value: '7', key: 'SMA JAKARTA 7' },
  { value: '8', key: 'SMA JAKARTA 8' },
  { value: '9', key: 'SMA JAKARTA 9' },
  { value: '10', key: 'SMA JAKARTA 10' },
];

export default function MultiSelect() {
  //#region  //*=========== Form ===========
  const methods = useForm({
    mode: 'onTouched',
  });
  const { handleSubmit, watch } = methods;
  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========
  const onSubmit = (data: unknown) => {
    // eslint-disable-next-line no-console
    console.log(data);
    return;
  };
  //#endregion  //*======== Form Submit ===========

  const school_1: string = watch('school_1');
  const school_2: string = watch('school_2');
  const school_3: string = watch('school_3');

  const getSchoolList = ({
    schoolsToExclude,
  }: {
    schoolsToExclude: string[];
  }) => {
    // return school that is not selected
    return schools.filter((school) => !schoolsToExclude.includes(school.value));
  };

  return (
    <Layout>
      <Seo templateTitle='Multiselect' />

      <section className=''>
        <div className='layout min-h-screen py-20'>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='max-w-sm space-y-3'
            >
              <SelectInput
                id='school_1'
                label='School 1'
                validation={{ required: 'School 1 must be filled' }}
                placeholder='Choose school 1'
              >
                {getSchoolList({ schoolsToExclude: [school_2, school_3] }).map(
                  (school) => (
                    <option key={school.value} value={school.value}>
                      {school.key}
                    </option>
                  )
                )}
              </SelectInput>
              <SelectInput
                id='school_2'
                label='School 2'
                validation={{ required: 'School 2 must be filled' }}
                placeholder='Choose school 2'
              >
                {getSchoolList({ schoolsToExclude: [school_1, school_3] }).map(
                  (school) => (
                    <option key={school.value} value={school.value}>
                      {school.key}
                    </option>
                  )
                )}
              </SelectInput>
              <SelectInput
                id='school_3'
                label='School 3'
                validation={{ required: 'School 3 must be filled' }}
                placeholder='Choose school 3'
              >
                {getSchoolList({ schoolsToExclude: [school_1, school_2] }).map(
                  (school) => (
                    <option key={school.value} value={school.value}>
                      {school.key}
                    </option>
                  )
                )}
              </SelectInput>

              <div className='flex flex-wrap gap-4'>
                <Button type='submit'>Submit</Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </section>
    </Layout>
  );
}
