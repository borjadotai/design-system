import { Bookmark } from 'react-feather';
import {
  BackgroundColors,
  BlueGradient,
  BorderColors,
  BrandColors,
  ForegroundColors,
  GrayGradient,
  GreenGradient,
  OrangeGradient,
  PinkGradient,
  PrimaryTextColors,
  RedGradient,
  SecondaryTextColors,
  StateColors,
  StateEmphasisColors,
  TerciaryTextColors,
} from './tokens/colors';
import Card from './components/Card';
import { Icons } from './tokens/icons';
import Playground from './components/Playground/Playground';
import { Label, Text, H1, H2, H3, H4 } from './components/Typography';
import List from './components/List';
import Tabs from './components/Tabs/Tabs';
import Pill from './components/Pill';
import Callout from './components/Callout';
import InlineCode from './components/InlineCode';
import Divider from './components/Divider';
import Logo from './components/Logo';

const text = 'The quick brown fox, jumps over the lazy dog.';

export default function App() {
  return (
    <div className="w-full h-full p-8 bg-background dark:bg-dark-background text-primary dark:text-dark-primary">
      <div className="max-w-3xl h-full mr-auto ml-auto">
        <div className="flex items-center mt-4">
          <H1 className="mr-4">Design System</H1>
          <Pill type="warning">WIP</Pill>
          <Pill type="info" className="ml-2">
            v.1.0.0
          </Pill>
        </div>
        <Divider className="my-6" />

        <div className="pt-6 pb-10">
          <H2 className="mb-4">Logo</H2>
          <Logo />
        </div>

        <div className="pt-6 pb-10">
          <H2 className="mb-4">Tokens</H2>
          <div className="flex space-x-6">
            <BrandColors />
            <BackgroundColors />
            <BorderColors />
            <ForegroundColors />
          </div>
          <div className="mt-4 flex space-x-6">
            <PrimaryTextColors />
            <SecondaryTextColors />
            <TerciaryTextColors />
          </div>
          <div className="mt-4 space-y-4">
            <StateColors />
            <StateEmphasisColors />
          </div>
        </div>

        <div className="py-10">
          <H2 className="mb-4">Palette</H2>
          <GrayGradient />
          <BlueGradient />
          <RedGradient />
          <OrangeGradient />
          <GreenGradient />
          <PinkGradient />
        </div>

        <div className="py-10">
          <H2>Typography</H2>
          <div className="mt-6">
            <Label>Display</Label>
            <Text>{text}</Text>
          </div>
          <div className="mt-6">
            <Label>Numeric</Label>
            <Text numeric>
              1 LY = 9.4607×10<sup>15</sup> m
            </Text>
          </div>
          <div className="mt-6">
            <Label>Mono</Label>
            <Text mono>console.log('foobar')</Text>
          </div>
          <div className="mt-6">
            <Label>Label</Label>
            <Label>I am a label</Label>
          </div>
          <div className="mt-6">
            <Label>Strong</Label>
            <Text strong>{text}</Text>
          </div>
          <div className="mt-6">
            <Label>Italic</Label>
            <Text italic>{text}</Text>
          </div>
          <div className="mt-6">
            <Label>Gradient</Label>
            <Text gradient className="bg-gradient-to-r from-green-400 via-blue-400 to-pink-400">
              {text}
            </Text>
          </div>
          <div className="mt-6">
            <Label>H1</Label>
            <H1>{text}</H1>
          </div>
          <div className="mt-6">
            <Label>H2</Label>
            <H2>{text}</H2>
          </div>
          <div className="mt-6">
            <Label>H3</Label>
            <H3>{text}</H3>
          </div>
          <div className="mt-6">
            <Label>H4</Label>
            <H4>{text}</H4>
          </div>
        </div>

        <div className="py-10">
          <H2>Cards</H2>
          <div className="my-4">
            <Label className="mb-2">Regular card</Label>
            <Card>Hello</Card>
          </div>
          <div className="my-4">
            <Label className="mb-2">Transparent card</Label>
            <Card transparent>Hello</Card>
          </div>
          <div className="my-4">
            <Label className="mb-2">Card with header</Label>
            <Card header="Header">Hello</Card>
          </div>
          <div className="my-4">
            <Label className="mb-2">Cards with depths</Label>
            <Playground>
              <div className="flex justify-between py-8 px-12 flex-wrap">
                <div className="my-2">
                  <Card header="Depth 1" depth={1}>
                    Shadow [sm]
                  </Card>
                </div>
                <div className="my-2">
                  <Card header="Depth 2" depth={2}>
                    Shadow [base]
                  </Card>
                </div>
                <div className="my-2">
                  <Card header="Depth 3" depth={3}>
                    Shadow [md]
                  </Card>
                </div>
                <div className="my-2">
                  <Card header="Depth 4" depth={4}>
                    Shadow [lg]
                  </Card>
                </div>
              </div>
            </Playground>
          </div>
        </div>

        <div className="py-10">
          <H2>Lists</H2>
          <div className="grid grid-cols-2 mt-2">
            <div className="my-4">
              <Label>Unordered List</Label>
              <List>
                <List.Item>First</List.Item>
                <List.Item>Second</List.Item>
                <List.Item>Third</List.Item>
              </List>
            </div>
            <div className="my-4">
              <Label>Ordered List</Label>
              <List ordered>
                <List.Item>First</List.Item>
                <List.Item>Second</List.Item>
                <List.Item>Third</List.Item>
              </List>
            </div>
            <div className="my-4">
              <Label>{`Unordered List > OL`}</Label>
              <List>
                <List.Item>
                  <div>
                    Header
                    <List ordered>
                      <List.Item>First</List.Item>
                      <List.Item>Second</List.Item>
                      <List.Item>Third</List.Item>
                    </List>
                  </div>
                </List.Item>
              </List>
            </div>
            <div className="my-4">
              <Label>{`Unordered List > UL`}</Label>
              <List>
                <List.Item>
                  <div>
                    Header
                    <List>
                      <List.Item>First</List.Item>
                      <List.Item>Second</List.Item>
                      <List.Item>Third</List.Item>
                    </List>
                  </div>
                </List.Item>
              </List>
            </div>
            <div className="my-4">
              <Label>{`Ordered List > UL`}</Label>
              <List ordered>
                <List.Item>
                  Header
                  <div className="ml-6">
                    <List>
                      <List.Item>First</List.Item>
                      <List.Item>Second</List.Item>
                      <List.Item>Third</List.Item>
                    </List>
                  </div>
                </List.Item>
              </List>
            </div>
            <div className="my-4">
              <Label>{`Ordered List > OL`}</Label>
              <List ordered>
                <List.Item>
                  Header
                  <div className="ml-6">
                    <List ordered>
                      <List.Item>First</List.Item>
                      <List.Item>Second</List.Item>
                      <List.Item>Third</List.Item>
                    </List>
                  </div>
                </List.Item>
              </List>
            </div>
          </div>
        </div>

        <div className="py-10">
          <H2 className="mb-4">Tabs</H2>
          <Label>Navigation</Label>
          <Tabs />
        </div>

        <div className="py-10">
          <H2>Pills</H2>
          <div className="flex gap-4 mt-4">
            <Pill type="info">Info Pill</Pill>
            <Pill type="success">Success Pill</Pill>
            <Pill type="warning">Warning Pill</Pill>
            <Pill type="danger">Danger Pill</Pill>
          </div>
        </div>

        <div className="py-10">
          <H2>Callout</H2>
          <div className="flex flex-col gap-6">
            <Callout variant="info">
              <Text>Info Callout</Text>
            </Callout>
            <Callout label="Learn more" variant="info">
              <Text>Info Callout with label</Text>
            </Callout>
            <Callout variant="danger">
              <Text>Danger Callout</Text>
            </Callout>
            <Callout label="Be careful!" variant="danger">
              <Text>Danger Callout with label</Text>
            </Callout>
          </div>
        </div>

        <div className="py-10">
          <H2 className="mb-4">Inline code</H2>
          <InlineCode>{"const foo = () => 'bar'"}</InlineCode>
        </div>

        <div className="py-10">
          <H2 className="mb-6">Icons</H2>
          <Label className="my-4">Sizes</Label>
          <div className="grid grid-cols-7 gap-4 items-center mb-8">
            <Bookmark size={32} className="text-danger dark:text-dark-danger" />
            <Bookmark size={28} className="text-danger dark:text-dark-danger" />
            <Bookmark size={24} className="text-danger dark:text-dark-danger" />
            <Bookmark size={18} className="text-danger dark:text-dark-danger" />
            <Bookmark size={16} className="text-danger dark:text-dark-danger" />
          </div>
          <Label className="my-4">Colors</Label>
          <div className="grid grid-cols-7 gap-4 mb-8">
            <Bookmark className="text-danger dark:text-dark-danger" />
            <Bookmark className="text-info dark:text-dark-info" />
            <Bookmark className="text-success dark:text-dark-success" />
            <Bookmark className="text-warning dark:text-dark-warning" />
            <Bookmark className="text-primary dark:text-dark-primary" />
            <Bookmark className="text-secondary dark:text-dark-secondary" />
            <Bookmark className="text-terciary dark:text-dark-terciary" />
          </div>
          <Label className="my-4">Types</Label>
          <Icons />
        </div>
      </div>
    </div>
  );
}
