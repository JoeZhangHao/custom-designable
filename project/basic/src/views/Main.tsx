import { defineComponent, onRenderTracked, onRenderTriggered } from 'vue';
import { createForm } from '@formily/core';
import { InputNumber, FormItem, Space } from '@formily/element-plus';
import { FormProvider, FormConsumer, Field } from '@formily/vue';

export default defineComponent({
  name: 'AppMain',
  setup(props, { slots }) {
    const form = createForm();

    onRenderTracked((event) => {
      debugger;
    });

    onRenderTriggered((event) => {
      debugger;
    });

    return () => (
      <FormProvider form={form}>
        <Space>
          <Field
            name="price"
            title="价格"
            initialValue={5.2}
            decorator={[FormItem]}
            component={[
              InputNumber,
              {
                placeholder: '请输入',
                style: {
                  width: 100,
                },
              },
            ]}
          />
          <FormItem>×</FormItem>
          <Field
            name="count"
            title="数量"
            initialValue={100}
            decorator={[FormItem]}
            component={[
              InputNumber,
              {
                placeholder: '请输入',
                style: {
                  width: 100,
                },
              },
            ]}
          />
          <FormConsumer>
            {{
              default: () => (
                <FormItem>
                  = {`${form.values.price * form.values.count} 元`}
                </FormItem>
              ),
            }}
          </FormConsumer>
        </Space>
      </FormProvider>
    );
  },
});
