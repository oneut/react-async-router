import React from "react";
import test from "ava";
import { mount } from "enzyme";
import createMemoryHistory from "history/createMemoryHistory";
import Router from "../../src/ssr/Router";
import RouteMatcher from "../../src/lib/RouteMatcher";
import HistoryManager from "../../src/lib/HistoryManager";

test.beforeEach((t) => {
  const routeMatcher = new RouteMatcher();

  const historyManager = new HistoryManager();
  historyManager.initialRouteMatcher(routeMatcher);

  t.context.router = new Router(historyManager, routeMatcher);
  t.context.historyManager = historyManager;
});

test.cb("Index route", (t) => {
  t.context.historyManager.initialHistory(createMemoryHistory());

  // Page Settings
  class IndexPage extends React.Component {
    static initialPropsWillGet() {
      t.fail();
    }

    static async getInitialProps() {
      t.fail();
    }

    static initialPropsDidGet() {
      t.fail();
    }

    render() {
      return (
        <div>
          <h1>Index</h1>
          {this.props.message}
        </div>
      );
    }
  }

  t.context.router.route("/", IndexPage);
  t.context.router.setInitialProps({ message: "first rendering data" });
  t.context.router.run(async (RootComponent) => {
    // The Router use RxJS to control async/await.
    // So, First Mount is null.
    const actual = mount(React.createElement(RootComponent));
    const expected = mount(
      React.createElement(IndexPage, { message: "first rendering data" })
    );
    t.is(actual.html(), expected.html());
    t.end();
  });
});

test.cb("Set initial props", (t) => {
  t.context.historyManager.initialHistory(createMemoryHistory());

  // Page Settings
  class IndexPage extends React.Component {
    render() {
      return (
        <div>
          <h1>Index</h1>
          <ul>
            {this.props.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }
  }

  t.context.router.route("/", IndexPage);
  t.context.router.setInitialProps({ items: ["foo", "bar", "baz"] });
  t.context.router.run(async (RootComponent) => {
    const actual = mount(React.createElement(RootComponent));
    const expected = mount(
      React.createElement(IndexPage, { items: ["foo", "bar", "baz"] })
    );

    t.is(actual.html(), expected.html());
    t.end();
  });
});

test("No match route", (t) => {
  t.context.historyManager.initialHistory(
    createMemoryHistory({
      initialEntries: ["/unmatch"]
    })
  );

  // Page Settings
  class IndexPage extends React.Component {
    render() {
      return (
        <div>
          <h1>Index</h1>
        </div>
      );
    }
  }

  t.context.router.route("/", IndexPage);
  t.context.router.run(async (RootComponent) => {
    t.fail();
  });

  t.pass();
});

test.cb("Not found page", (t) => {
  t.context.historyManager.initialHistory(
    createMemoryHistory({
      initialEntries: ["/notfound"]
    })
  );

  // Page Settings
  class IndexPage extends React.Component {
    render() {
      return (
        <div>
          <h1>Index</h1>
        </div>
      );
    }
  }

  // Page Settings
  class NotFoundPage extends React.Component {
    render() {
      return (
        <div>
          <h1>NotFound</h1>
        </div>
      );
    }
  }

  t.context.router.route("/", IndexPage);
  t.context.router.route("(.*)", NotFoundPage);
  t.context.router.run(async (RootComponent) => {
    const actual = mount(React.createElement(RootComponent));
    const expected = mount(React.createElement(NotFoundPage));
    t.is(actual.html(), expected.html());
    t.end();
  });
});

test.cb("Async route", (t) => {
  t.context.historyManager.initialHistory(createMemoryHistory());

  // Page Settings
  class DynamicImportComponent extends React.Component {
    render() {
      return <div>{this.props.message}</div>;
    }
  }

  // Use promise instead of dynamic import
  t.context.router.setInitialProps({ message: "dynamic import" });
  t.context.router.asyncRoute("/", () =>
    Promise.resolve(DynamicImportComponent)
  );

  t.context.router.run((RootComponent) => {
    const actual = mount(<RootComponent />);
    const expected = mount(
      <DynamicImportComponent message={"dynamic import"} />
    );
    t.is(actual.html(), expected.html());
    t.end();
  });
});
