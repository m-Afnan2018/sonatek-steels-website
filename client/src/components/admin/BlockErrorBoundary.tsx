'use client';

import { Component, ReactNode } from 'react';

interface Props {
    label: string;
    children: ReactNode;
}
interface State {
    error: Error | null;
}

export default class BlockErrorBoundary extends Component<Props, State> {
    state: State = { error: null };

    static getDerivedStateFromError(error: Error): State {
        return { error };
    }

    componentDidUpdate(prevProps: Props) {
        // Reset once the underlying content changes (e.g. a field was fixed) so the
        // next render is given a fresh chance instead of staying stuck on the error.
        if (this.state.error && prevProps.children !== this.props.children) {
            this.setState({ error: null });
        }
    }

    render() {
        if (this.state.error) {
            return (
                <div style={{
                    padding: '28px 20px', textAlign: 'center', background: 'var(--a-error-bg)',
                    color: 'var(--a-error)', border: '1px dashed var(--a-error)', borderRadius: 8,
                    fontSize: 13,
                }}>
                    <strong>{this.props.label}</strong> can't preview yet — {this.state.error.message}
                </div>
            );
        }
        return this.props.children;
    }
}
