import React, { Component } from "react";

type WithFetchProps = {
  url: string;
  dataProperties: string[];
};

type WithFetchState<T> = {
  data: T[];
};

function withFetchHoc<T>(
  WrappedComponent: React.ComponentType<{
    data: T[];
    url: string;
    dataProperties: string[];
  }>
) {
  return class extends Component<WithFetchProps, WithFetchState<T>> {
    state: WithFetchState<T> = {
      data: [],
    };

    componentDidMount() {
      this.fetchData();
    }

    fetchData = async () => {
      const { url } = this.props;
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (result && result.data) {
          this.setState({ data: result.data });
        } else {
          console.error("Invalid API response structure:", result);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    render() {
      const { data } = this.state;
      return <WrappedComponent data={data} {...this.props} />;
    }
  };
}

export default withFetchHoc;
