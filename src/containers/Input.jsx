import React from 'react';
import { connect } from 'react-redux';
import { loadFromTxt } from '../actions/InputActions';
import { start } from '../actions/CheckingActions';
import Checkbox from '../components/ui/Checkbox';
import { bytesToSize, splitByKK } from '../misc/text';
import { toggleOption } from '../actions/CoreActions';

import '../../public/styles/Input.postcss';

const Input = ({ loaded, size, total, unique, name, loadFromTxt, start, shuffle, toggleOption }) => (
    <div className="proxy-input">
        <section className="load-file-area">
            <div className="select-event" onClick={loadFromTxt}>
                <svg viewBox="0 -25 396 396">
                    <path d="m363 82.699219h-146.300781c-2.410157.003906-4.820313-.195313-7.199219-.597657-.832031.316407-1.710938.488282-2.601562.5h-206.898438v229.898438c.0195312 18.21875 14.78125 32.980469 33 33h330c18.21875-.019531 32.980469-14.78125 33-33v-196.800781c-.019531-18.21875-14.78125-32.980469-33-33zm0 0" />
                    <path d="m175 57.398438-20.601562-39.597657c-5.644532-10.964843-16.964844-17.8437498-29.296876-17.800781h-92.101562c-18.21875.0195312-32.9804688 14.78125-33 33v35.699219h183.199219c-3.261719-3.351563-6.019531-7.160157-8.199219-11.300781zm0 0" />
                </svg>
                Load from txt
            </div>
            {loaded ? (
                <div className="data">
                    <Checkbox id="core-shuffle" name="shuffle" checked={shuffle} onChange={toggleOption} text="Shuffle" />
                    <div className="stat">
                        <div className="item">
                            <span>Total</span>
                            <span>{splitByKK(total)}</span>
                        </div>
                        <div className="item">
                            <span>Unique</span>
                            <span>{splitByKK(unique)}</span>
                        </div>
                        <div className="item">
                            <span>File Name</span>
                            <span>{name}</span>
                        </div>
                        <div className="item">
                            <span>Size</span>
                            <span>{bytesToSize(size)}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <svg className="metrics-svg" viewBox="0 -17 512 512">
                    <path d="m74.722656 297.265625h-51.734375c-12.675781 0-22.988281 10.3125-22.988281 22.992187v134.375c0 12.675782 10.3125 22.988282 22.988281 22.988282h51.734375c12.679688 0 22.992188-10.3125 22.992188-22.988282v-134.375c0-12.679687-10.3125-22.992187-22.992188-22.992187zm7.992188 157.367187c0 4.402344-3.585938 7.988282-7.992188 7.988282h-51.734375c-4.402343 0-7.988281-3.585938-7.988281-7.988282v-134.375c0-4.40625 3.585938-7.992187 7.988281-7.992187h51.734375c4.40625 0 7.992188 3.585937 7.992188 7.992187zm0 0" />
                    <path d="m212.820312 191.945312h-51.734374c-12.675782 0-22.988282 10.3125-22.988282 22.988282v42.644531c0 4.140625 3.355469 7.5 7.5 7.5 4.140625 0 7.5-3.359375 7.5-7.5v-42.644531c0-4.402344 3.582032-7.988282 7.988282-7.988282h51.734374c4.40625 0 7.988282 3.585938 7.988282 7.988282v239.699218c0 4.402344-3.582032 7.988282-7.988282 7.988282h-51.734374c-4.40625 0-7.988282-3.585938-7.988282-7.988282v-167.054687c0-4.140625-3.359375-7.5-7.5-7.5-4.144531 0-7.5 3.359375-7.5 7.5v167.054687c0 12.675782 10.3125 22.988282 22.988282 22.988282h51.734374c12.675782 0 22.988282-10.3125 22.988282-22.988282v-239.695312c0-12.679688-10.3125-22.992188-22.988282-22.992188zm0 0" />
                    <path d="m350.914062 255.140625h-51.734374c-12.675782 0-22.988282 10.3125-22.988282 22.988281v176.503906c0 12.675782 10.3125 22.988282 22.988282 22.988282h51.734374c12.679688 0 22.992188-10.3125 22.992188-22.988282v-176.503906c0-12.675781-10.3125-22.988281-22.992188-22.988281zm7.992188 199.492187c0 4.402344-3.585938 7.988282-7.992188 7.988282h-51.734374c-4.40625 0-7.988282-3.585938-7.988282-7.988282v-176.503906c0-4.40625 3.582032-7.988281 7.988282-7.988281h51.734374c4.40625 0 7.992188 3.582031 7.992188 7.988281zm0 0" />
                    <path d="m489.011719 139.285156h-51.734375c-12.675782 0-22.992188 10.3125-22.992188 22.988282v214.304687c0 4.140625 3.359375 7.5 7.5 7.5 4.144532 0 7.5-3.359375 7.5-7.5v-214.304687c0-4.40625 3.585938-7.988282 7.992188-7.988282h51.734375c4.402343 0 7.988281 3.582032 7.988281 7.988282v292.359374c0 4.402344-3.585938 7.988282-7.988281 7.988282h-51.734375c-4.40625 0-7.992188-3.585938-7.992188-7.988282v-48.054687c0-4.140625-3.355468-7.5-7.5-7.5-4.140625 0-7.5 3.359375-7.5 7.5v48.054687c0 12.675782 10.316406 22.988282 22.992188 22.988282h51.734375c12.675781 0 22.988281-10.3125 22.988281-22.988282v-292.359374c0-12.675782-10.3125-22.988282-22.988281-22.988282zm0 0" />
                    <path d="m48.855469 157.980469c-25.765625 0-46.730469 20.964843-46.730469 46.730469 0 25.769531 20.964844 46.734374 46.730469 46.734374 25.769531 0 46.734375-20.964843 46.734375-46.734374 0-2.046876-.148438-4.054688-.402344-6.03125l73.683594-56.199219c5.5625 2.34375 11.675781 3.644531 18.082031 3.644531 10.101563 0 19.457031-3.234375 27.109375-8.703125l64.460938 29.496094c2.195312 23.742187 22.21875 42.398437 46.523437 42.398437 25.769531 0 46.734375-20.964844 46.734375-46.730468 0-2.792969-.261719-5.523438-.730469-8.179688l76.027344-63.789062c5.011719 1.84375 10.425781 2.847656 16.066406 2.847656 25.765625 0 46.730469-20.964844 46.730469-46.734375 0-25.765625-20.964844-46.730469-46.730469-46.730469-25.769531 0-46.734375 20.964844-46.734375 46.730469 0 2.792969.261719 5.523437.730469 8.179687l-76.03125 63.789063c-5.007813-1.839844-10.421875-2.847657-16.0625-2.847657-10.101563 0-19.457031 3.234376-27.109375 8.707032l-64.460938-29.5c-2.195312-23.742188-22.214843-42.398438-46.523437-42.398438-25.769531 0-46.730469 20.964844-46.730469 46.730469 0 2.046875.144532 4.058594.402344 6.035156l-73.6875 56.195313c-5.566406-2.34375-11.671875-3.640625-18.082031-3.640625zm414.289062-142.980469c17.496094 0 31.730469 14.234375 31.730469 31.730469 0 17.496093-14.234375 31.734375-31.730469 31.734375-17.234375 0-31.734375-14.5-31.734375-31.734375 0-17.496094 14.234375-31.730469 31.734375-31.730469zm-40.5625 54.925781c.125.21875.261719.429688.390625.644531 2.710938 4.566407 6.199219 8.667969 10.277344 12.070313l-67.640625 56.746094c-.125-.21875-2.175781-3.476563-3.179687-4.816407-2.179688-2.90625-4.691407-5.5625-7.488282-7.898437zm-129.261719 92.191407c.257813-17.007813 14.621094-31.265626 31.726563-31.265626 17.054687 0 31.730469 14.582032 31.730469 31.734376 0 17.496093-14.234375 31.730468-31.730469 31.730468s-31.730469-14.234375-31.730469-31.730468c0-.15625 0-.3125.003906-.46875zm-67.832031-36.328126c3.070313-4.507812 5.386719-9.519531 6.738281-14.804687l54.46875 24.921875c-2.773437 3.996094-4.941406 8.433594-6.359374 13.089844-.203126.660156-.390626 1.324218-.5625 1.992187l-54.46875-24.921875c.0625-.089844.121093-.183594.183593-.277344zm-38.535156-58.128906c17.496094 0 31.730469 14.234375 31.730469 31.730469 0 17.09375-14.664063 31.734375-31.730469 31.734375-17.074219 0-31.734375-14.5625-31.734375-31.734375 0-17.496094 14.234375-31.730469 31.734375-31.730469zm-41.597656 53.019532c.089843.171874.191406.34375.28125.515624 2.507812 4.742188 5.832031 9.054688 9.789062 12.675782l-64.972656 49.554687c-1.203125-2.34375-2.617187-4.59375-4.195313-6.699219-1.75-2.335937-3.710937-4.515624-5.875-6.496093zm-77.589844 58.824218c7.699219 5.859375 12.824219 15.085938 12.824219 25.207032 0 17.5-14.234375 31.734374-31.734375 31.734374-17.496094 0-31.730469-14.234374-31.730469-31.734374 0-17.496094 14.234375-31.730469 31.730469-31.730469 6.976562 0 13.566406 2.449219 18.910156 6.523437zm0 0" />
                </svg>
            )}
        </section>
        <section className="bottom">
            <button className="button check-button" onClick={start}>
                Check
            </button>
        </section>
    </div>
);

const mapStateToProps = state => ({
    ...state.input,
    shuffle: state.core.shuffle
});

const mapDispatchToProps = {
    loadFromTxt,
    start,
    toggleOption
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);
