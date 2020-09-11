export default {
  'repository': {
    'databaseId': 10270250,
    'issues': {
      'edges': [
        {
          'node': {
            'author': {
              'avatarUrl': 'https://avatars3.githubusercontent.com/u/35865592?u=be06392998897425536a81a412ce42f3c9d48ae5&v=4',
              'login': 'wambugucoder',
              'url': 'https://github.com/wambugucoder'
            },
            'bodyHTML': '<p>React scripts version 3.4.2 fails to run on docker compose</p>',
            'updatedAt': '2020-09-10T13:39:24Z',
            'closedAt': '2020-09-10T13:39:24Z',
            'createdAt': '2020-09-10T13:29:43Z',
            'databaseId': 697965944,
            'number': 19806,
            'state': 'CLOSED',
            'title': 'Bug: React integration to docker issue',
            'url': 'https://github.com/facebook/react/issues/19806',
            'labels': {
              'edges': [
                {
                  'node': {
                    'name': 'Status: Unconfirmed'
                  }
                }
              ]
            }
          }
        },
        {
          'node': {
            'author': {
              'avatarUrl': 'https://avatars3.githubusercontent.com/u/12951461?u=6c28fe69cd1e3e51cda49ff00d27bf826343c307&v=4',
              'login': 'yisar',
              'url': 'https://github.com/yisar'
            },
            'bodyHTML': "<p>First of all, thank you for reading and patience.</p>\n<p>I've been studying the principle of react lanes recently, and its implementation is interesting to me, but I still don't know what the specific problems it solves.</p>\n<blockquote>\n<p>This constraint was designed before Suspense was a thing, and it made some sense in that world. When all your work is CPU bound, there's not much reason to work on tasks in any order other than by their priority. But when you introduce tasks that are IO-bound (i.e. Suspense), you can have a scenario where a higher priority IO-bound task blocks a lower-priority CPU-bound task from completing.</p>\n</blockquote>\n<p>From the explanation of <a class=\"user-mention\" data-hovercard-type=\"user\" data-hovercard-url=\"/users/acdlite/hovercard\" data-octo-click=\"hovercard-link-click\" data-octo-dimensions=\"link_type:self\" href=\"https://github.com/acdlite\">@acdlite</a> , it seems to solve the blocking problem of IO operation on low priority tasks.</p>\n<p>But I couldn't figure out what asynchronous IO blocked？</p>\n<div class=\"highlight highlight-source-js\"><pre><span class=\"pl-c1\">&lt;</span><span class=\"pl-ent\">A</span>/<span class=\"pl-c1\">&gt;</span>\n<span class=\"pl-c1\">&lt;</span><span class=\"pl-v\">Suspense</span><span class=\"pl-c1\">&gt;</span>\n  <span class=\"pl-c1\">&lt;</span><span class=\"pl-ent\">B</span>/<span class=\"pl-c1\">&gt;</span>\n<span class=\"pl-c1\">&lt;</span>/Susepsne&gt;\n<span class=\"pl-c1\">&lt;</span><span class=\"pl-ent\">C</span>/<span class=\"pl-c1\">&gt;</span></pre></div>\n<p>Based on the above example, before lanes, where is blocked, and where is the problem solved after lanes.</p>\n<p>Or do you have a better demo to explain?</p>\n<p>For developers, the new technology related information is too little, binary is also very abstract, thank you again for your patience.</p>",
            'updatedAt': '2020-09-10T16:42:11Z',
            'closedAt': '2020-09-10T13:22:28Z',
            'createdAt': '2020-09-10T07:13:00Z',
            'databaseId': 697535772,
            'number': 19804,
            'state': 'CLOSED',
            'title': 'Some questions about lanes.',
            'url': 'https://github.com/facebook/react/issues/19804',
            'labels': {
              'edges': [
                {
                  'node': {
                    'name': 'Component: Reconciler'
                  }
                },
                {
                  'node': {
                    'name': 'Type: Question'
                  }
                }
              ]
            }
          }
        },
        {
          'node': {
            'author': {
              'avatarUrl': 'https://avatars1.githubusercontent.com/u/4676536?u=bff7d10d3e2c269125c9e4890ccfd382d3ad7d2f&v=4',
              'login': 'alecmolloy',
              'url': 'https://github.com/alecmolloy'
            },
            'bodyHTML': "<p>This bug is likely a very close sibling of <a class=\"issue-link js-issue-link\" data-error-text=\"Failed to load title\" data-id=\"655500419\" data-permission-text=\"Title is private\" data-url=\"https://github.com/facebook/react/issues/19327\" data-hovercard-type=\"issue\" data-hovercard-url=\"/facebook/react/issues/19327/hovercard\" href=\"https://github.com/facebook/react/issues/19327\">#19327</a>, only this time it is for casting <code>as T</code>. I can't understand the line that fixed it (<a href=\"https://github.com/facebook/react/pull/19316/files#diff-26e3db67655052fb708395a89179543bR546-R549\">this specifically</a>), but am happy to help write the rest of the PR's tests if someone can help with the fix for this one.</p>\n<p>React version: 16.13.1 (latest)<br>\neslint-plugin-react-hooks version: 4.1.0 (latest)</p>\n<h2>Steps To Reproduce</h2>\n<ol>\n<li>Cast a variable to a type in a hook callback.</li>\n</ol>\n<p>Link to code example:<br>\n<a rel=\"nofollow\" href=\"https://codesandbox.io/s/admiring-tharp-cbq0d?file=/src/App.tsx\">https://codesandbox.io/s/admiring-tharp-cbq0d?file=/src/App.tsx</a></p>\n<div class=\"highlight highlight-source-tsx\"><pre><span class=\"pl-k\">type</span> <span class=\"pl-smi\">Foo</span> <span class=\"pl-c1\">=</span> <span class=\"pl-s\">\"Bar\"</span><span class=\"pl-kos\">;</span>\n\n<span class=\"pl-k\">export</span> <span class=\"pl-k\">default</span> <span class=\"pl-k\">function</span> <span class=\"pl-smi\">App</span><span class=\"pl-kos\">(</span><span class=\"pl-kos\">)</span> <span class=\"pl-kos\">{</span>\n  <span class=\"pl-k\">const</span> <span class=\"pl-s1\">callback</span> <span class=\"pl-c1\">=</span> <span class=\"pl-smi\">React</span><span class=\"pl-kos\">.</span><span class=\"pl-en\">useCallback</span><span class=\"pl-kos\">(</span><span class=\"pl-kos\">(</span><span class=\"pl-kos\">)</span> <span class=\"pl-c1\">=&gt;</span> <span class=\"pl-kos\">{</span>\n    <span class=\"pl-c\">// this is the offending line:</span>\n    <span class=\"pl-k\">const</span> <span class=\"pl-s1\">foo</span> <span class=\"pl-c1\">=</span> <span class=\"pl-s\">\"Foo\"</span> <span class=\"pl-k\">as</span> <span class=\"pl-smi\">Foo</span><span class=\"pl-kos\">;</span>\n    <span class=\"pl-k\">return</span> <span class=\"pl-s1\">foo</span><span class=\"pl-kos\">;</span>\n  <span class=\"pl-kos\">}</span><span class=\"pl-kos\">,</span> <span class=\"pl-kos\">[</span><span class=\"pl-kos\">]</span><span class=\"pl-kos\">)</span><span class=\"pl-kos\">;</span>\n  <span class=\"pl-k\">return</span> <span class=\"pl-c1\">&lt;</span><span class=\"pl-ent\">div</span> <span class=\"pl-c1\">onClick</span><span class=\"pl-c1\">=</span><span class=\"pl-kos\">{</span><span class=\"pl-s1\">callback</span><span class=\"pl-kos\">}</span> /<span class=\"pl-c1\">&gt;</span><span class=\"pl-kos\">;</span>\n<span class=\"pl-kos\">}</span></pre></div>\n<h2>The current behavior</h2>\n<pre><code>React Hook React.useCallback has a missing dependency: 'Foo'. Either include it or remove the dependency array.eslintreact-hooks/exhaustive-deps\n</code></pre>\n<h2>The expected behavior</h2>\n<p>No error, a type cannot be a dependency.</p>",
            'updatedAt': '2020-09-10T08:55:52Z',
            'closedAt': '2020-09-10T08:55:46Z',
            'createdAt': '2020-09-10T00:16:27Z',
            'databaseId': 697260109,
            'number': 19802,
            'state': 'CLOSED',
            'title': 'Bug: react-hooks/exhaustive-deps reports a casted TypeScript type as a dependency',
            'url': 'https://github.com/facebook/react/issues/19802',
            'labels': {
              'edges': [
                {
                  'node': {
                    'name': 'Resolution: Duplicate'
                  }
                }
              ]
            }
          }
        },
        {
          'node': {
            'author': {
              'avatarUrl': 'https://avatars3.githubusercontent.com/u/9162439?v=4',
              'login': 'vasimi',
              'url': 'https://github.com/vasimi'
            },
            'bodyHTML': "\n<p>React version: 16.12.0</p>\n<h2>Steps To Reproduce</h2>\n<ol>\n<li>Use <code>renderToString</code> to render <code>&lt;source&gt;</code> element with <code>srcset</code> attribute</li>\n</ol>\n\n<p>Link to code example: <a rel=\"nofollow\" href=\"https://codesandbox.io/s/react-dom-camelcase-bug-1rnxt\">https://codesandbox.io/s/react-dom-camelcase-bug-1rnxt</a></p>\n\n<h2>The current behavior</h2>\n<p><code>srcSet</code> isn't transformed to <code>srcset</code></p>\n<h2>The expected behavior</h2>\n<p><code>srcSet</code> becomes <code>srcset</code></p>",
            'updatedAt': '2020-09-09T20:52:31Z',
            'closedAt': '2020-09-09T14:52:31Z',
            'createdAt': '2020-09-09T14:13:30Z',
            'databaseId': 696852024,
            'number': 19799,
            'state': 'CLOSED',
            'title': 'Bug: renderToString renders srcSet instead of srcset',
            'url': 'https://github.com/facebook/react/issues/19799',
            'labels': {
              'edges': [
                {
                  'node': {
                    'name': 'Resolution: Duplicate'
                  }
                }
              ]
            }
          }
        },
        {
          'node': {
            'author': {
              'avatarUrl': 'https://avatars0.githubusercontent.com/u/46638021?u=a630cb937fba7e1bab57436c5ea69f8dd57a5f24&v=4',
              'login': 'PabloAbreuC',
              'url': 'https://github.com/PabloAbreuC'
            },
            'bodyHTML': '',
            'updatedAt': '2020-09-10T00:27:52Z',
            'closedAt': '2020-09-09T12:03:04Z',
            'createdAt': '2020-09-08T22:22:49Z',
            'databaseId': 696215687,
            'number': 19790,
            'state': 'CLOSED',
            'title': "Bug: components with className=\"adInfo\" don't render",
            'url': 'https://github.com/facebook/react/issues/19790',
            'labels': {
              'edges': [
                {
                  'node': {
                    'name': 'Status: Unconfirmed'
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
} as IGithubResultType;
