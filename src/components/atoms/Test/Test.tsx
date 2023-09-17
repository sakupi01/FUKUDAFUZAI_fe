import { useHooks } from './hooks'
export type  TestProps = {
};

export const Test=({ ...props }: TestProps
)=>{

  const hook = useHooks(props)

    return (
      <>
        <p>this is react template</p>
      </>
    )
}